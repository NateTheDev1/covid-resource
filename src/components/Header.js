import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "30px 2%",
    height: "75px",
    backgroundColor: "black",

    "& h1": {
      fontSize: "1.3rem",
      textTransform: "uppercase",
      fontWeight: "500",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <h1>COVID-19 Resource</h1>
      </AppBar>
    </div>
  );
};

export default Header;
