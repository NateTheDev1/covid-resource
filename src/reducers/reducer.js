import {
  CHANGE_COUNTRY,
  FETCH_COUNTRY,
  FETCH_PERSONAL_COUNTRY,
} from "../actions/actions";
import { data } from "../countriesDataStatic";

let initialState = {
  staticCountries: data,
  countriesData: [],
  countryFilter: "",
  personalCountry: localStorage.getItem("country")
    ? localStorage.getItem("country")
    : "",
  personalCountryData: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COUNTRY:
      return { ...state, personalCountry: action.payload };
    case FETCH_COUNTRY:
      return {
        ...state,
        countriesData: action.payload,
        personalCountryData: action.personalCountryData,
      };
    case FETCH_PERSONAL_COUNTRY:
      return { ...state, personalCountryData: action.payload };
    default:
      return state;
  }
};
