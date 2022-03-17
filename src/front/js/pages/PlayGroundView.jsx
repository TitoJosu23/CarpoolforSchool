import React, { useState, useEffecr, useContext } from "react";
import { NavReuse } from "../component/NavReuse.jsx";
import "../../styles/rideTimeline.css";
import { RideTimeLine } from "../component/RideTimeline.jsx";

export const PlayGroundView = () => {
  const [rideEvent, setRideEvent] = useState("");
  return (
    <>
      <NavReuse />
      <RideTimeLine />
    </>
  );
};
