import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import "../../styles/GuardianNavBar.css";

export const GuardianNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand">Welcome Guardian</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link active" aria-current="page" href="#">
                Home
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link" href="#">
                Report a Flag
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link" href="#">
                Send a Tip
              </p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account Settings:
              </p>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Schedule
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Children
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BlackList
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
