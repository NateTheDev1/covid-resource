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
      {props.loading === true && props.personalCountryData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {props.personalCountry.length === 0 ? (
            <MyCountry />
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 2%",
              }}
            >
              <PersonalCountry
                personalCountryData={props.personalCountryData}
              />
              <div style={{ width: "65%", margin: 0, border: "1px solid red" }}>
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
                  Other Countries
                </h2>
                <hr />
                <div className={classes.countries}>
                  <ul>
                    {props.countriesData.map((c) => {
                      return <li>{c.Country}</li>;
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
