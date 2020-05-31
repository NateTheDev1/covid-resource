import React, { useState } from "react";
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
import useStyles from "./MyCountryStyles";

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
                {props.countriesData.map((c) => (
                  <option value={c.Country}>{c.Country}</option>
                ))}
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
    countriesData: state.staticCountries,
  };
};

export default connect(mapStateToProps, {
  changeCountry,
  fetchPersonalCountry,
})(MyCountry);
