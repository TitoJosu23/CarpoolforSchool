import React, { useState, useEffect, useContext } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { FaSchool } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiAutocomplete-inputRoot": {
    color: "White",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 6,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "White",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "White",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "White",
    },
  },
});

export const GuardianSearchBar = (props) => {
  return (
    <div className="searchBar">
<<<<<<< HEAD
      <Autocomplete
        sx={{ bgcolor: "#FFFFFF" }}
        freeSolo
        options={schoolInfo}
=======
      <StyledAutocomplete
        id="checkboxes-tags-demo"
        freeSolo
        options={props.guardians}
        disableCloseOnSelect
        disableClearable
        getOptionLabel={(option) =>
          guardian.first_name + "" + guardian.last_name
        }
        renderOption={(props, option, { selected }) => (
          <Link className="text-dark" to={"/school/" + option.School_Id}>
            <li {...props}>
              <Checkbox
                icon={<FaSchool />}
                checkedIcon={<BsCheckLg />}
                style={{ marginRight: 8 }}
              />
              {option.School_Name}
            </li>
          </Link>
        )}
>>>>>>> 87e3d0caa904ea5cda5e976dc44b505b0806f731
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
<<<<<<< HEAD
            label="Guardian Search"
            type="search"
            InputLabelProps={{
              style: { color: "#000000" },
            }}
            onChange={(e) => {
              searchHash(e.target.value);
=======
            InputLabelProps={{
              style: { color: "#a9a9a9" },
>>>>>>> 87e3d0caa904ea5cda5e976dc44b505b0806f731
            }}
            label="Search Guardians"
            type="search"
            placeholder="Search for guardians in your schools"
          />
        )}
      />
    </div>
  );
};
