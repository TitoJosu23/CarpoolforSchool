import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { NavReuse } from "../component/NavReuse.jsx";
import { UserProfileDetails } from "../component/UserProfileDetails.jsx";
import "../../styles/profileDetails.css";

export const ProfileDetails = (props) => {
  return (
    <>
      <NavReuse />
      <UserProfileDetails />
    </>
  );
};
