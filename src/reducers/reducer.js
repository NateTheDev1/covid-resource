import {
  CHANGE_COUNTRY,
  FETCH_COUNTRY,
  FETCH_PERSONAL_COUNTRY,
  FETCHING,
} from "../actions/actions";
import { data } from "../countriesDataStatic";

const initialState = {
  staticCountries: data,
  countriesData: [],
  countryFilter: "",
  personalCountry: localStorage.getItem("country")
    ? localStorage.getItem("country")
    : "",
  personalCountryData: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, loading: true };
    case CHANGE_COUNTRY:
      return { ...state, personalCountry: action.payload };
    case FETCH_COUNTRY:
      return {
        ...state,
        countriesData: action.payload,
        personalCountryData: action.personalCountryData,
        loading: false,
      };
    case FETCH_PERSONAL_COUNTRY:
      return { ...state, personalCountryData: action.payload, loading: false };
    default:
      return state;
  }
};
