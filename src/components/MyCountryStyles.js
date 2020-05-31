import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    marginTop: "5%",
    margin: "0 auto",
    width: "75%",
    height: "15vh",
    padding: "20px 1.25%",
    textAlign: "center",
    fontWeight: "500",
    color: "white",
    backgroundColor: "#212121",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    width: "25%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-around",
    color: "gray",
    "&:hover": {
      color: "white",
      backgroundColor: "#1976D2",
    },
    "@media (max-width:776px)": {
      width: "50%",
    },
    "@media (max-width:410px)": {
      width: "60%",
    },
  },
  icon: {
    color: "gray",
  },
});

export default useStyles;
