import React, { useState, useEffect, useContext } from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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

export const GuardianProfileDetails = () => {
  const [driver, setDriver] = useState("");

  const handleChange = (e) => {
    setDriver(e.target.value);
  };

  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog open fullWidth maxWidth="sm" color="primary">
            <h1>Guardian Details</h1>
            <TextField
              color="primary"
              placeholder="Enter Address"
              id="outlined-basic"
              label="Address"
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
            <TextField
              placeholder="Enter School Code"
              id="outlined-basic"
              label="School Code"
              fullWidth
            />
            <br />

            <Button color="secondary" variant="contained">
              Request to become a Guardian
            </Button>
          </Dialog>
        </React.Fragment>
      </ThemeProvider>
    </>
  );
};
