import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  DialogActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Select,
  Input,
} from "@material-ui/core";
import FlagIcon from "@material-ui/icons/Flag";
import { connect } from "react-redux";
import { changeCountry, fetchPersonalCountry } from "../actions/actions";

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
  },
  icon: {
    color: "gray",
  },
});

const MyCountry = (props) => {
  const [open, setOpen] = useState(true);
  const [country, setCountry] = useState("");
  const classes = useStyles();

  const handleSelect = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    props.changeCountry(country);
    props.fetchPersonalCountry(props.personalCountry);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <h3>Enter Your Country To Prioritize Statistics</h3>
      <Button
        variant="outlined"
        className={classes.btn}
        onClick={handleClickOpen}
      >
        Get Started <FlagIcon className={classes.icon} />
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Please Select A Country</DialogTitle>
        <DialogContent>
          <form>
            <FormControl style={{ width: "100%", height: "10vh" }}>
              <InputLabel htmlFor="country">Country</InputLabel>
              <Select
                native
                value={country}
                onChange={handleSelect}
                input={<Input id="country" />}
                className={classes.select}
              >
                <option aria-label="Select" value="Example">
                  Example
                </option>
                <option aria-label="Select" value="United States of America">
                  United States of America
                </option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    personalCountry: state.personalCountry,
    personalCountryData: state.personalCountryData,
  };
};

export default connect(mapStateToProps, {
  changeCountry,
  fetchPersonalCountry,
})(MyCountry);
