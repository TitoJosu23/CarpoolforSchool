import React, { useState, useEffect, useContext } from "react";
import { NavReuse } from "../component/NavReuse.jsx";
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
      main: "#51ABF5",
    },
    secondary: {
      main: "#51ABF5",
    },
    background: {
      paper: "#FFFFFF",
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

export const AddAChild = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setGrade(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <>
      <NavReuse />{" "}
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Dialog open fullWidth maxWidth="sm" color="primary">
            <h1>Add A Child</h1>
            <TextField
              color="primary"
              placeholder="Child First Name"
              id="outlined-basic"
              label="First Name"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Child Last Name"
              id="outlined-basic"
              label="Last Name"
              fullWidth
            />
            <br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Child Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Child Gender"
                onChange={handleGender}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              placeholder="Mobile"
              id="outlined-basic"
              label="Phone Number"
              fullWidth
            />
            <br />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Child Grade</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={grade}
                label="Child Grade"
                onChange={handleChange}
              >
                <MenuItem value={"Kindergarten"}>Kindergarten</MenuItem>
                <MenuItem value={"First"}>First</MenuItem>
                <MenuItem value={"Second"}>Second</MenuItem>
                <MenuItem value={"Third"}>Third</MenuItem>
                <MenuItem value={"Fourth"}>Fourth</MenuItem>
                <MenuItem value={"Fifth"}>Fifth</MenuItem>
                <MenuItem value={"Sixth"}>Sixth</MenuItem>
                <MenuItem value={"Seventh"}>Seventh</MenuItem>
                <MenuItem value={"Eigth"}>Eigth</MenuItem>
                <MenuItem value={"Ninth"}>Ninth</MenuItem>
                <MenuItem value={"Tenth"}>Tenth</MenuItem>
                <MenuItem value={"Eleventh"}>Eleventh</MenuItem>
                <MenuItem value={"Twelfth"}>Twelfth</MenuItem>
              </Select>
            </FormControl>
            <br />

            <br />
            <Button color="secondary" variant="contained">
              Save Child
            </Button>
          </Dialog>
        </React.Fragment>
      </ThemeProvider>
    </>
  );
};
