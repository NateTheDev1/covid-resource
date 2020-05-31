import React from "react";
import { AppBar } from "@material-ui/core";
import useStyles from "./HeaderStyles";
import moment from "moment";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <h1>COVID-19 Resource</h1>
        <div>
          <p>Last Updated: {moment().calendar()}</p>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
