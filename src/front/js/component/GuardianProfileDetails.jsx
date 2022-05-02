import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useParams, useHistory } from "react-router-dom";

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

export const GuardianProfileDetails = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setDriver(e.target.value);
  };

  const updateFields = (data) => {
    setFirstName(data.first_name);
    setLastName(data.last_name);
    setAddress(data.address);
    setPhone(data.phone);
  };

  useEffect(() => {
    actions.getSelf().then((payload) => {
      updateFields(payload);
    });
  }, []);

  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog open fullWidth maxWidth="sm" color="primary">
            <h1>Guardian Profile Details</h1>
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
              placeholder="Enter Your Address"
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
                actions
                  .updateGuardian(firstName, lastName, address, phone)
                  .then(history.push("/home"));
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
