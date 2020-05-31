import React from "react";
import Header from "./components/Header";
import useStyles from "./AppStyles";
import MyCountry from "./components/MyCountry";
import { connect } from "react-redux";

const App = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      {props.personalCountry.length === 0 ? (
        <MyCountry />
      ) : (
        <h1>{props.personalCountry}</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personalCountry: state.personalCountry,
  };
};

export default connect(mapStateToProps, {})(App);
