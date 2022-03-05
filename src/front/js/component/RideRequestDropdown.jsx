import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";

export const RideRequestDropdown = () => {
  return (
    <div class="btn-group" style={{ float: "right" }}>
      <button class="btn btn-secondary btn-lg" type="button">
        Request A Ride
      </button>
      <button
        type="button"
        class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <div class="form-check" style={{ border: "black 1px solid" }}>
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            Child 1
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            Child 2
          </label>
          <button
            style={{ margin: "auto" }}
            type="button"
            class="btn btn-primary btn-lg"
          >
            Request Carpool
          </button>
        </div>
      </ul>
    </div>
  );
};
