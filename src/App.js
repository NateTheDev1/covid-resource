import React, { useEffect } from "react";
import Header from "./components/Header";
import useStyles from "./AppStyles";
import MyCountry from "./components/MyCountry";
import { connect } from "react-redux";
import { fetchCountry } from "./actions/actions";
import PersonalCountry from "./components/PersonalCountry";
import OtherCountries from "./components/OtherCountries";

const App = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.fetchCountry(props.personalCountry);
  }, [props.personalCountry]);

  return (
    <div className={classes.root}>
      <Header />
      {props.loading === true && props.personalCountryData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {props.personalCountry.length === 0 ? (
            <MyCountry />
          ) : (
            <div className={classes.otherCountries}>
              <PersonalCountry
                personalCountryData={props.personalCountryData}
              />
              <div className={classes.content}>
                <h2
                  style={{
                    textAlign: "center",

                    fontWeight: 400,
                    fontSize: "1.5rem",
                    letterSpacing: "2",
                    textTransform: "uppercase",
                    color: "gray",
                  }}
                >
                  Cases By Country
                </h2>
                <hr />
                <div className={classes.countries}>
                  <ul>
                    {props.countriesData.map((c) => {
                      return <OtherCountries country={c} />;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personalCountry: state.personalCountry,
    countriesData: state.countriesData,
    personalCountryData: state.personalCountryData,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchCountry })(App);
