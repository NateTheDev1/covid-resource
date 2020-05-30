import React from "react";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    maxWidth: "960px",
    margin: "0 auto",
    backgroundColor: "white",
    boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.45)",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
};

export default App;
