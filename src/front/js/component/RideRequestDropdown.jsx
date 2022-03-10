import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export const RideRequestDropdown = (props) => {
  return (
    <div className="dropdownContainer">
      <div className="btn-group">
        <button
          className="btn btn-primary btn-lg dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Request a Ride
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {props.children.map((child, index) => {
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
          })}
          <li className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-sm mx-auto">
              Request Carpool
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
