import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    backgroundColor: "white",
    boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.45)",
  },
  countries: {
    width: "98%",

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
    },
  },
  otherCountries: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 2%",

    "@media (max-width: 875px)": {
      flexDirection: "column",
    },
  },
  content: {
    width: "65%",

    "@media (max-width: 875px)": {
      width: "100%",
      margin: "0 auto",
    },
  },
});

export default useStyles;
