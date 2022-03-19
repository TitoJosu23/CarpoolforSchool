import React, { useContext, useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { NavReuse } from "../component/NavReuse.jsx";
import { Context } from "../store/appContext";

import "../../styles/guardianSchedule.css";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const RequestRide = () => {
  const { store, actions } = useContext(Context);
  const [children, setChildren] = useState([]);
  const [driver, setDriver] = useState(false);

  useEffect(() => {
    actions.getChildren().then((payload) => setChildren(payload));
  }, []);

  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <div className="container mt-5 over">
          <div className="row d-flex">
            <div className="feedPanel order-1 col-md-6 col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
    children?.map((child, index) => {
      return (
        <li>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label" for="flexRadioDefault1">
              {child.first_name}
            </label>
          </div>
        </li>
      );
    });
  }