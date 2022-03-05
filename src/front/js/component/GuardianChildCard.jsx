import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";

export const GuardianChildCard = () => {
  return (
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="true" href="#">
              Accepted
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pending
            </a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Child with a Ride: </h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">
          Cancel Carpool
        </a>
      </div>
    </div>
  );
};
