import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";

export const PageName = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  //declare states here vvvv
  const [state, setState] = useState("State");

  if (logStatus === null) {
    history.push("/");
  }

  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        ADD PAGE CONTENT HERE!!!!!!!!!!!!!!!!!!!!!!!!!
      </div>
    </div>
  );
};
