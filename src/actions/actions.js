export const CHANGE_COUNTRY = "CHANGE_COUNTRY";

export const changeCountry = (country) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_COUNTRY, payload: country });
  };
};
