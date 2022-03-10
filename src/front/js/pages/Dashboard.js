import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { GuardianNav } from "../component/GuardianNavBar.jsx";
import { ModalSearchGuardian } from "../component/ModalSearchGuardian";
import { GuardianChildCard } from "../component/GuardianChildCard.jsx";
import { RideRequestDropdown } from "../component/RideRequestDropdown.jsx";
import "../../styles/Dashboard.css";
import { SchoolsAcceptedCarousel } from "../component/SchoolsAcceptedCarousel.jsx";
import { IsRole } from "../component/IsRole.jsx";
import { AdminNavBar } from "../component/AdminNavBar.js";

export const Dashboard = (props) => {
  const [children, setChildren] = useState([]);
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));

  useEffect(() => {
    actions.getChildren().then((payload) => setChildren(payload));
  }, []);

  console.log(children);
  if (logStatus === null) {
    history.push("/user/login");
  }
  return (
    <div className="dashBoardHome">
      <IsRole roles={["guardian"]}></IsRole>
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
          <div style={{ marginTop: "10px" }} className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="true" href="#">
                    Accepted
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pending
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Child with a Ride: </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Cancel Carpool
              </a>
            </div>
            <div>
              <h1>test</h1>
              <ModalSearchGuardian />
            </div>
          </div>
        </div>
        <div className="dropdownContainer" style={{ marginRight: "50px" }}>
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
              {children.map((child, index) => {
                return (
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        {child.first_name}
                      </label>
                    </div>
                  </li>
                );
              })}
              <li className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary btn-sm mx-auto"
                >
                  Request Carpool
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#F2F2F2" }} className="carouselContainer">
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
    </div>
  );
};
