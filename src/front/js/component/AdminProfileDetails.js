import React, { useState, useEffect, useContext } from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export const AdminProfileDetails = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [schoolCode, setSchoolCode] = useState("");

  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog open fullWidth maxWidth="sm" color="primary">
            <h1>Admin School Details</h1>
            <TextField
              color="primary"
              placeholder="Enter School Name"
              id="outlined-basic"
              label="School Name"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter School Address"
              id="outlined-basic"
              label="School Address"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Create School Code"
              id="outlined-basic"
              label="School ID"
              fullWidth
            />

            <br />
            <Button color="secondary" variant="contained">
              CREATE A SCHOOL
            </Button>
          </Dialog>
        </React.Fragment>
      </ThemeProvider>
    </>
  );
};
