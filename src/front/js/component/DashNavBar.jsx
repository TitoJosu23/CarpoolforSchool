import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import "../../styles/dashnav.css";

export const DashNavBar = (props) => {
  return (
    <>
      <nav className="navBar">
        <ul className="navBar-nav">{props.children}</ul>
      </nav>
    </>
  );
};
