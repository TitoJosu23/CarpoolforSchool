import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";

export const GuardianSearch = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  //declare states here vvvv
  const [state, setState] = useState("State");
  if (logStatus === null) {
    history.push("/");
  }
  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <h1>Search Guardians</h1>
        <div className="search container-fluid">
          <SearchBar />

          <div className="searchedlist">
            <GuardianSearchList />
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div class="guardianSearchBar input-group">
      <br />
      <br />
      <input
        type="text"
        class="form-control"
        placeholder="Search Guardians"
        aria-label="Text input with segmented dropdown button"
      ></input>
      <button type="button" class="btn btn-outline-secondary">
        School Filter
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <a class="dropdown-item" href="#">
            School 1
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            School 2
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            School 3
          </a>
        </li>
      </ul>
    </div>
  );
};

const GuardianSearchList = () => {
  return (
    <div className="guardList container mt-5 over">
      <div className="row d-flex">
        <div className="guardianPanel col-md-6 col-12">
          <div className="guardianInnerPanel col-12">
            <ul className="guardLine">
              <li className="eventItem d-flex justify-content-center">
                <a href="#" className="eventText mt-3 p-3" aria-current="true">
                  Bob Dylan
                </a>
              </li>
              <li className="eventItem d-flex justify-content-center">
                <a href="#" className="eventText mt-3 p-3">
                  Kanye West
                </a>
              </li>
              <li className="eventItem d-flex justify-content-center">
                <a href="#" className="eventText mt-3 p-3">
                  Pete Davidson
                </a>
              </li>
              <li className="eventItem d-flex justify-content-center">
                <a href="#" className="eventText mt-3 p-3">
                  Arianna Grande
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
