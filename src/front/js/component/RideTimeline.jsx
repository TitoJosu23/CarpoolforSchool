import React, { useState, useEffect, useContext } from "react";
import { NavReuse } from "../component/NavReuse.jsx";
import "../../styles/rideTimeline.css";

export const RideTimeLine = () => {
  const [rideEvent, setRideEvent] = useState("");
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="rideFeed d-flex justify-content-center">
            <div className="bubble mx-auto">
              {" "}
              <ul className="timeline mx-auto">
                <li className="eventItem d-flex justify-content-center">
                  <p className="eventText mt-3 p-3">
                    Child was picked up at school by Guardian.
                  </p>
                </li>
                <li className="eventItem d-flex justify-content-center">
                  <p className="eventText mt-2 p-3">
                    Child was dropped off at school by Guardian
                  </p>
                </li>
                <li className="eventItem d-flex justify-content-center">
                  <p className="eventText mt-2 p-3">
                    Child 2 was picked up by Guardian.
                  </p>
                </li>
                <li className="eventItem d-flex justify-content-center">
                  <p className="eventText mt-2 p-3">
                    Child 2 was dropped off by Guardian.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
