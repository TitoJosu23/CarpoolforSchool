import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { NavReuse } from "../component/NavReuse.jsx";
import "../../styles/guardianSearch.css";

export const GuardianSearch = () => {
  return (
    <>
      <NavReuse />
      <h1>Search For Guardian</h1>
      <div className="search container-fluid">
        <div className="guardianSearch container">
          <SearchBar />
        </div>
        <div className="guardian search-card-container">
          <GuardianCard />
        </div>
      </div>
    </>
  );
};
const GuardianCard = () => {
  return (
    <>
      {" "}
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://www.seekpng.com/png/small/72-729700_account-avatar-face-head-person-profile-user-comments.png"
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Guardian</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="nameInfo list-group-item">Guardian Name</li>
          <li className="phoneInfo list-group-item">Phone Number</li>
          <li className="seatsInfo list-group-item">Seats Available</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Guardian Profile
          </a>
          <a href="#" className="card-link">
            Flag Guardian
          </a>
        </div>
      </div>
    </>
  );
};
const SearchBar = () => {
  return (
    <>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search "
          aria-label="Search"
        />
        <SchoolSelect />

        <button className="btn btn-outline-success" type="submit">
          Search Guardians
        </button>
      </form>
    </>
  );
};
const SchoolSelect = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form>
        <select
          className="schoolSelectOptions"
          value={value}
          onChange={handleChange}
        >
          <option value="Village Green ">Village Green Elem</option>
          <option value="Doolin">Doolin Middle</option>
          <option value="Kendall Lakes">Kendall Lakes Elem</option>
          <option value="Felix Varela">Felix Varela</option>
        </select>
      </form>
    </>
  );
};
