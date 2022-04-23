import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ActivityFeed } from "../component/ActivityFeed.jsx";

import { NavReuse } from "../component/NavReuse.jsx";
import { Profile } from "../component/Profile.jsx";

// Nav items

// Dashboard
export const Dashboard = (props) => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));

  if (logStatus === null) {
    history.push("/");
  }
  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome"></div>
    </div>
  );
};
