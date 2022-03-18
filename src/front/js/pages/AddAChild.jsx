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
import { Context } from "../store/appContext";
import { Link, useParams, useHistory } from "react-router-dom";

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
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");

  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <ThemeProvider theme={theme}>
          <div className="addChild">
            <Dialog open fullWidth maxWidth="sm" color="primary">
              <h1 className="my-3">Child Info</h1>
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                color="primary"
                placeholder="Child First Name"
                id="outlined-basic"
                label="First Name"
                fullWidth
              />
              <br />
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Child Last Name"
                id="outlined-basic"
                label="Last Name"
                fullWidth
              />
              <br />
              <TextField
                onChange={(e) => setAge(e.target.value)}
                color="primary"
                placeholder="Age"
                id="outlined-basic"
                label="First Name"
                type="number"
                fullWidth
              />
              <br />

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Child Grade
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={grade}
                  label="Child Grade"
                  onChange={(e) => setGrade(e.target.value)}
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
              <Button
                className="w-75 mx-auto fs-4"
                onClick={(e) => {
                  actions
                    .addChild(firstName, lastName, grade, age)
                    .then(history.push("/"));
                }}
                color="secondary"
                variant="contained"
              >
                Add Child
              </Button>
              <Link to={"/home"}>
                {" "}
                <Button
                  className="w-75 mx-auto mt-2 fs-4"
                  color="secondary"
                  variant="contained"
                >
                  Cancel
                </Button>
              </Link>

              <br />
            </Dialog>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};
