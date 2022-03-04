import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { GuardianNav } from "../component/GuardianNav.jsx";
import { GuardianChildCard } from "../component/GuardianChildCard.jsx";
import { RideRequestDropdown } from "../component/RideRequestDropdown.jsx";
import "../../styles/guardianHome.css";
import { SchoolsAcceptedCarousel } from "../component/SchoolsAcceptedCarousel.jsx";

export const GuardianHome = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <>
      <GuardianNav />
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "400px",
          backgroundColor: "#F2F2F2",
        }}
        className="content-container"
      >
        <div className="cardContainer">
          <div style={{ marginTop: "10px" }} class="card text-center">
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
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Cancel Carpool
              </a>
            </div>
          </div>
        </div>
        <div className="dropdownContainer" style={{ marginRight: "50px" }}>
          <div class="btn-group">
            <button
              class="btn btn-secondary btn-lg dropdown-toggle"
              style={{ backgroundColor: "blue" }}
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Request a Ride
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Child One
                  </label>
                </div>
              </li>
              <li>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Child Two
                  </label>
                  <button
                    type="button"
                    style={{ margin: "auto" }}
                    class="btn btn-primary btn-sm"
                  >
                    Request Carpool
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="carouselContainer">
        <div className="text">
          <h1>Schools</h1>
        </div>
        <div className="acceptedSchool">
          <h3>Accepted</h3>
          <div>
            <SchoolsAcceptedCarousel />
          </div>
        </div>
        <div className="pendingSchool">
          <h3>Pending</h3>
        </div>
      </div>
    </>
  );
};
