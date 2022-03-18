import React from "react";
import { Link } from "react-router-dom";
import { NavReuse } from "../component/NavReuse.jsx";

import "../../styles/guardianSchedule.css";

export const GuardianSchedule = () => {
  return (
    <div className="guardian-schedule">
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitches">
          Driver
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          readOnly
        />
      </div>
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitchesChecked">
          Availability
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          readOnly
        />
      </div>
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitches">
          Morning
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          readOnly
        />
      </div>
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitchesChecked">
          Afternoon
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitchesChecked"
          readOnly
        />
      </div>
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitches">
          Monday
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          readOnly
        />
      </div>
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitchesChecked">
          Tuesday
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitchesChecked"
          readOnly
        />
      </div>
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitches">
          Wednesday
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          readOnly
        />
      </div>
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitchesChecked">
          Thursday
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitchesChecked"
          readOnly
        />
      </div>
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitches">
          Friday
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          readOnly
        />
      </div>
      <div className="custom-control custom-switch box">
        <label className="custom-control-label" htmlFor="customSwitchesChecked">
          Accepted
        </label>
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitchesChecked"
          readOnly
        />
      </div>
      <input type="submit"/>
    </div>
  );
};
