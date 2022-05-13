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
        sx={{ bgcolor: "#FFFFFF" }}
        freeSolo
        options={schoolInfo}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Guardian Search"
            type="search"
            InputLabelProps={{
              style: { color: "#000000" },
            }}
            onChange={(e) => {
              searchHash(e.target.value);
            }}
            placeholder="Search Guardians in your School"
          />
        )}
      />
    </div>
  );
};

//useEffect(() => {
//   setGuardians(store.guardians);
// }, [store.guardians]);
// console.log(guardians);

// const [schoolInfo, setSchoolInfo] = useState([
//   {
//     schoolName: "Village Green Elementary",
//     schoolAddress: "2265 SW 34th St, Miami, FL 33175",
//   },
//   {
//     schoolName: "Doolin Middle School",
//     schoolAddress: "6401 SW 152nd Ave, Miami, FL 33193",
//   },
//   {
//     schoolName: "Felix Varela High School",
//     schoolAddress: "15255 SW 96th St, Miami, FL 33196",
//   },
// ]);

// const options = schoolInfo;
// useEffect(() => {
//   const qs = queryString.parse(location.hash);
//   console.log("This is parsed info: ", qs);
//   searchFunction(qs.keyword);
// }, [schoolInfo]);

// const searchFunction = (keyword) => {
//   console.log("Search function keyword: ", keyword);
//   let filteredArray = guardians.filter((item) => {
//     if (keyword == "" || keyword == undefined) {
//       return item;
//     } else if (item.title.toLowerCase().includes(keyword.toLowerCase())) {
//       return item;
//     }
//   });
//   setGuardians(filteredArray);
// };

// const searchHash = (event) => {
//   searchFunction(event.target.value);
//   if (event.target.value == "") {
//     setGuardians(store.guardians);
//   }
//   location.hash = `keyword=${event.target.value}`;
// };
// return (
//   <div className="searchBar rounded-pill border border-dark border-3 d-flex container-fluid">
//     <div className="school-selector">
//       <select
//         onChange={(e) => setSchoolName(e.target.value)}
//         className="form-select rounded-pill"
//       >
//         <option selected>Filter by School</option>
//         <option value={props.schoolName}>Village Green Elementary</option>
//         <option value={props.schoolName}>Doolin Middle School</option>
//         <option value={props.schoolName}>Felix Varela Highschool</option>
//       </select>
//     </div>
//     <div className="search-field ">
//       <input
//         type="searchs"
//         onChange={(e) => setSearchValue(e.target.value)}
//         value={searchValue}
//         className="form-control rounded-pill"
//         placeholder="Search Guardian"
//       ></input>
//     </div>
//     <button
//       type="button"
//       className="search-click btn btn-outline-info rounded-circle"
//     >
//       <FaSearch />
//     </button>
