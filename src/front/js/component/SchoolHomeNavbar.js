import React from "react";
import "../../styles/index.css";
import "../../styles/SchoolHome.css";
import { Link } from "react-router-dom";

const SchoolHomeNavbar = () => {
  return (
    <div clasName="SchoolHomeNavbar">
      <nav className=" navbar navbar-expand-lg navbar-light bg-light nav-school-home">
        <h4 className="navbar-title">School Name</h4>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <div class="dropdown">
              <button className="dropbtn">Settings</button>
              <div className="dropdown-content nav-link">
                <Link to="/">Search Guardians</Link>
                <Link to="/">Complaints</Link>
                <Link to="/">Requests</Link>
                <Link to="/">Settings</Link>
              </div>
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SchoolHomeNavbar;

// nav-link dropdown-toggle setting-position
