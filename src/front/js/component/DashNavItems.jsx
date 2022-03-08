import React, { useState } from "react";
import propTypes from "prop-types";
import "../../styles/dashnav.css";
export const DashNavItems = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
      </li>
    </>
  );
};
