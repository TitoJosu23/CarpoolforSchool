import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { NavReuse } from "../component/NavReuse.jsx";
import "../../styles/profileDetails.css";
import { GuardianProfileDetails } from "../component/GuardianProfileDetails.jsx";

export const UserDetails = () => {
  const logStatus = JSON.parse(localStorage.getItem("session"));

  if (logStatus === null) {
    history.push("/");
  }

  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <GuardianProfileDetails />
      </div>
    </div>
  );
};
