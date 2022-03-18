import React, { useState, useEffect, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Context } from "../store/appContext";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GuardianProfileDetails } from "./GuardianProfileDetails";
import { Link, useParams } from "react-router-dom";

let theme = createTheme({
  palette: {
    primary: {
      main: "#039be5",
    },
    secondary: {
      main: "#224758e1",
    },
    background: {
      paper: "#e1f5fe",
    },
    text: {
      primary: "#212121",
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto",
    },
  },
});

export const UserProfileDetails = () => {
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog open fullWidth maxWidth="sm" color="primary">
            <h1>Profile Details</h1>
            <TextField
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              color="primary"
              placeholder="Enter Your First Name"
              id="outlined-basic"
              label="First Name"
              fullWidth
            />
            <br />
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Enter Your Last Name"
              id="outlined-basic"
              label="Last Name"
              fullWidth
            />
            <br />
            <TextField
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Enter Your Email"
              id="outlined-basic"
              label="Address"
              fullWidth
            />
            <br />
            <TextField
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Mobile"
              id="outlined-basic"
              label="Phone Number"
              fullWidth
            />
            <br />
            <br />
            <Button
              onClick={() => {
                actions.updateGuardian(firstName, lastName, address, phone);
              }}
              color="secondary"
              variant="contained"
            >
              Update Information
            </Button>
            <Link to={"/home"}>
              <Button>Cancel</Button>
            </Link>
          </Dialog>
        </React.Fragment>
      </ThemeProvider>
    </>
  );
};
