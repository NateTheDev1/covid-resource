import React, { useEffect, useState } from "react";
import { fetchPersonalCountry } from "../actions/actions";
import { connect } from "react-redux";
import { Paper, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
    margin: "0 auto",
    width: "100%",
    height: "35vh",
    padding: "20px 1.25%",
    textAlign: "center",
    fontWeight: "500",
    color: "white",
    backgroundColor: "#212121",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",

    "@media (max-width: 875px)": {
      margin: "0 auto",
      width: "90%",
      marginBottom: "3%",
    },
  },
  card: {
    height: "100%",
    backgroundColor: "#212121",
    color: "white",
  },
});

const PersonalCountry = (props) => {
  const classes = useStyles();

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontWeight: 400,
          fontSize: "1.5rem",
          letterSpacing: "2",
          textTransform: "uppercase",
          color: "gray",
        }}
      >
        Your Country
      </h2>
      <hr />
      <Paper elevation={3} className={classes.root}>
        {props.loading === false && props.personalCountryData.length !== 0 ? (
          // <div>
          //   <h3></h3>
          //   <img
          //     src={`https://www.countryflags.io/${props.personalCountryData[0].CountryCode}/flat/64.png`}
          //   />
          //   <div className={props.personalCountryData[0].stats}>
          //     <h2>{props.personalCountryData[0].NewConfirmed}</h2>
          //     <p>Confirmed Cases</p>
          //   </div>
          // </div>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography
                gutterBottom
                style={{
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  marginBottom: "15%",
                }}
              >
                {props.personalCountryData[0].Country}
              </Typography>
              <Typography gutterBottom style={{ color: "yellow" }}>
                {props.personalCountryData[0].NewConfirmed}
              </Typography>
              <Typography
                gutterBottom
                style={{ fontWeight: 400, fontSize: "1.2rem" }}
              >
                Confirmed Cases
              </Typography>
              <Typography gutterBottom style={{ color: "red" }}>
                {props.personalCountryData[0].NewDeaths}
              </Typography>
              <Typography
                gutterBottom
                style={{ fontWeight: 400, fontSize: "1.2rem" }}
              >
                New Deaths
              </Typography>
              <Typography gutterBottom style={{ color: "green" }}>
                {props.personalCountryData[0].NewRecovered}
              </Typography>
              <Typography
                gutterBottom
                style={{ fontWeight: 400, fontSize: "1.2rem" }}
              >
                New Recovered
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <h1>Still Loading</h1>
        )}
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personalCountryData: state.personalCountryData,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchPersonalCountry })(
  PersonalCountry
);
