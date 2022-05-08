import React, { useState, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import queryString from "query-string";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { FaSchool } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const SchoolSearchBar = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="searchBar">
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        freeSolo
        options={props.schools}
        disableCloseOnSelect
        getOptionLabel={(option) => option.School_Name}
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
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Schools"
            type="search"
            placeholder="Search for your school"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "White",
              },
            }}
          />
        )}
      />
    </div>
  );
};
