import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import "../../styles/dashnav.css";

export const DashNavBar = (props) => {
  return (
    <>
      <nav className="navBar justify-content-between h-100 w-100 ">
        <span className="greetingText text-light mt-auto mb-auto">
          {props.name}
        </span>
        <ul className="d-flex pb-2 navBar-nav">{props.children}</ul>
      </nav>
    </>
  );
};
