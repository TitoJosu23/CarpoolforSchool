import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
export const DashNavItems = (props) => {
  const [open, setOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setOpen(false);
  });
  return (
    <div ref={domNode} className="">
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
