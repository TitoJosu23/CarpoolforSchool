import React, { useState, useEffect, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GuardianProfileDetails } from "./GuardianProfileDetails";

let theme = createTheme({
  palette: {
    primary: {
      main: "#039be5",
    },
    secondary: {
      main: "#448aff",
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumnber] = useState("");
  const [email, setEmail] = useState("");
  const [driver, setDriver] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setDriver(e.target.value);
  };

  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog open fullWidth maxWidth="sm" color="primary">
            <h1>Guardian Profile Details</h1>
            <TextField
              color="primary"
              placeholder="Enter Your First Name"
              id="outlined-basic"
              label="First Name"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              id="outlined-basic"
              label="Last Name"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              id="outlined-basic"
              label="Email"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Mobile"
              id="outlined-basic"
              label="Phone Number"
              fullWidth
            />
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Drive-Enabled
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={driver}
                label="Drive-Enabled"
                onChange={handleChange}
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>
            <br />

            <br />
            <Button color="secondary" variant="contained">
              Save Guardian Information
            </Button>
          </Dialog>
        </React.Fragment>
      </ThemeProvider>
    </>
  );
};
