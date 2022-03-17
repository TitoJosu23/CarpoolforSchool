import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { NavReuse } from "../component/NavReuse.jsx";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ff6f00",
    },
    secondary: {
      main: "#fff8e1",
    },
    background: {
      paper: "#ffecb3",
    },
    text: {
      primary: "#212121",
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto",
    },

    shape: {
      borderRadius: "4",
    },
  },
});

export const AdminDetails = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const history = useHistory();
  const { store, actions } = useContext(Context);

  return (
    <>
      <NavReuse />{" "}
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog open fullWidth maxWidth="sm" color="primary">
            <h1>Register School</h1>
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
            <Button
              style={{ marginBottom: "5pxß" }}
              color="secondary"
              variant="contained"
              onClick={() => {
                history.push("/home");
              }}
            >
              CREATE A SCHOOL
            </Button>
          </Dialog>
        </React.Fragment>
      </ThemeProvider>
    </>
  );
};
