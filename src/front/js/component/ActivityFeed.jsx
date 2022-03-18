import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/activityfeed.css";
import { RideRequestDropdown } from "../component/RideRequestDropdown.jsx";

export const ActivityFeed = (props) => {
  const history = useHistory();
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-5 over">
      <div className="row d-flex">
        <div className="feedPanel order-1 col-md-6 col-12">
          <div className="innerPanel col-12">
            <ul className="timeline">
              <li className="eventItem d-flex justify-content-center">
                <p className="eventText mt-3 p-3">School1</p>
              </li>
              <li className="eventItem d-flex justify-content-center">
                <p className="eventText mt-2 p-3">School 2</p>
              </li>
              <li className="eventItem d-flex justify-content-center ">
                <p className="eventText mt-2 p-3">School 3</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="infoPanel order-1 col-md-6 col-12">
          <div className="innerPanel col-12">
            <ul className="timeline">
              <li className="eventItem d-flex justify-content-center">
                <p className="eventText mt-3 p-3">School1</p>
              </li>
              <li className="eventItem d-flex justify-content-center">
                <p className="eventText mt-2 p-3">School 2</p>
              </li>
              <li className="eventItem d-flex justify-content-center ">
                <p className="eventText mt-2 p-3">School 3</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
