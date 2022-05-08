import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";

export const ViewSchool = () => {
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
  console.log(params);
  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <div className="col-8 mx-auto my-3 bg-light">LOGO</div>
        <div className="col-8 mx-auto bg-light">Info</div>
        <button className="btn btn-primary my-3">JOIN</button>
      </div>
    </div>
  );
};
