import React, { useEffect } from "react";
import Header from "./components/Header";
import useStyles from "./AppStyles";
import MyCountry from "./components/MyCountry";
import { connect } from "react-redux";
import { fetchCountry } from "./actions/actions";
import PersonalCountry from "./components/PersonalCountry";

const App = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.fetchCountry(props.personalCountry);
  }, [props.personalCountry]);

  return (
    <div className={classes.root}>
      <Header />
      {props.personalCountry.length === 0 ? <MyCountry /> : <PersonalCountry />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personalCountry: state.personalCountry,
    countriesData: state.countriesData,
    personalCountryData: state.personalCountryData,
  };
};

export default connect(mapStateToProps, { fetchCountry })(App);
