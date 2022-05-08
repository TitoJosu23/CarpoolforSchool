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

export const GuardianSearchBar = (props) => {
  const { store, actions } = useContext(Context);
  const [schoolInfo, setSchoolInfo] = useState([]);

  useEffect(() => {
    const qs = queryString.parse(location.hash);
    searchFunction(qs.keyword);
  }, [store.guardians]);

  const searchFunction = (keyword) => {
    console.log("Search function keyword: ", keyword);
    let filteredArray = store.guardians.filter((item) => {
      if (keyword == "" || keyword == undefined) {
        return item;
      } else if (
        item.first_name.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return item;
      }
    });
    // setGuardians(filteredArray);
    props.func(filteredArray);
  };

  const searchHash = (event) => {
    searchFunction(event);
    if (event == "") {
      // setGuardians(store.guardians);
      props.func(store.guardians);
    }
    location.hash = `keyword=${event}`;
  };
  return (
    <div className="searchBar">
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        freeSolo
        options={schoolInfo}
        disableCloseOnSelect
        getOptionLabel={(option) => option.school_Name}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={<FaSchool />}
              checkedIcon={<BsCheckLg />}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.school_Name}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Guardian Search"
            type="search"
            onChange={(e) => {
              searchHash(e.target.value);
            }}
            placeholder="Search Guardians in your School"
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
