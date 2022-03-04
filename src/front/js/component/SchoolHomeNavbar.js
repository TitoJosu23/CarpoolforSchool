import React from "react";
import "../../styles/index.css";
import { Link } from "react-router-dom";

const SchoolHomeNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light nav-school-home">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Bootstrap
        </a>
      </nav>
    </>
  );
};

export default SchoolHomeNavbar;
