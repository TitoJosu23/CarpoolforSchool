import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";

export const Hidden = (props) => {
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
        <div className="text-light fs-2 mt-5">
          You have not blocked any guardians!
        </div>
      </div>
    </div>
  );
};
