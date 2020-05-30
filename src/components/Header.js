import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "30px 2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    height: "75px",
    backgroundColor: "#212121",

    "& h1": {
      fontSize: "1.3rem",
      textTransform: "uppercase",
      fontWeight: "500",
    },

    "& p": {
      color: "gray",
    },

    "@media (max-width: 615px)": {
      flexDirection: "column",
      justifyContent: "center",

      "& h1": {
        marginBottom: "2%",
      },
    },
  },
});

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
