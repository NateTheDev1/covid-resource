import React, { useEffect, useState } from "react";
import { fetchPersonalCountry } from "../actions/actions";
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  root: {},
});

const PersonalCountry = (props) => {
  const classes = useStyles();
  let country = localStorage.getItem("country");
  const [data, setData] = useState({
    Country: "United States",
    CountryCode: "US",
    NewConfirmed: "0",
  });

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        let personalCountryData = res.data.Countries.filter((c) => {
          return c.Country === country;
        });

        let newObj = {
          Country: personalCountryData.Country,
          CountryCode: personalCountryData.CountryCode,
          NewConfirmed: personalCountryData.NewConfirmed,
        };
        setData(newObj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Paper elevation={3} className={classes.root}>
      <h3>{data.Country}</h3>
      <img
        src={`https://www.countryflags.io/${data.CountryCode}/flat/64.png`}
      />
      <div className={data.stats}>
        <h2>{data.NewConfirmed}</h2>
        <p>Confirmed</p>
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    personalCountryData: state.personalCountryData,
  };
};

export default connect(mapStateToProps, { fetchPersonalCountry })(
  PersonalCountry
);
