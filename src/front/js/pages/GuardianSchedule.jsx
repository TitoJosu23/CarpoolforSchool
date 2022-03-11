import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";

export const GuardianSchedule = () => {
  return (
    <>
      <NavReuse />
      <div className="form-container">
        <div className="driving-enabled-toggle">Driver? or Nondriver.</div>
        <div className="time-of-day-container">Morning or Afternoon, both</div>
        <div className="days-of-week">Mon, Tues, Wed, Thur, Friday</div>
        <button>Save Settings</button>
        <button>Change Settings</button>
      </div>
    </>
  );
};
