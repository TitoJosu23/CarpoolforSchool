import React, { useState } from "react";
import propTypes from "prop-types";

export const DashNavItems = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <li className="nav-item mt-2">
        <a
          className={"icon-button btn" + " " + props.task}
          onClick={() => setOpen(!open)}
        >
          {props.icon}
        </a>
        {open && props.children}
      </li>
    </div>
  );
};
