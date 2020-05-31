import { CHANGE_COUNTRY } from "../actions/actions";

const initialState = {
  countryFilter: "",
  personalCountry: localStorage.getItem("country")
    ? localStorage.getItem("country")
    : "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COUNTRY:
      return { ...state, personalCountry: action.payload };
    default:
      return state;
  }
};
