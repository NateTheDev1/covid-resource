import axios from "axios";

export const CHANGE_COUNTRY = "CHANGE_COUNTRY";
export const FETCH_COUNTRY = "FETCH_COUNTRY";
export const FETCH_PERSONAL_COUNTRY = "FETCH_PERSONAL_COUNTRY";

export const changeCountry = (country) => {
  localStorage.setItem("country", country);
  return (dispatch) => {
    dispatch({ type: CHANGE_COUNTRY, payload: country });
  };
};

export const fetchCountry = (personalCountry) => (dispatch) => {
  console.log("Here");
  axios
    .get("https://api.covid19api.com/summary")
    .then((res) => {
      let personalCountryData = res.data.Countries.filter((c) => {
        return c.Country === personalCountry;
      });

      dispatch({
        type: FETCH_COUNTRY,
        payload: res.data.Countries,
        personalCountryData: personalCountryData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchPersonalCountry = (personalCountry) => (dispatch) => {
  axios
    .get("https://api.covid19api.com/summary")
    .then((res) => {
      let personalCountryData = res.data.Countries.filter((c) => {
        return c.Country === personalCountry;
      });
      console.log(personalCountryData);
      dispatch({
        type: FETCH_PERSONAL_COUNTRY,
        payload: personalCountryData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
