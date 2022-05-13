import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";

export const PendingRides = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  //declare states here vvvv
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    actions.getPendingRides().then((payload) => setRequests(payload));
  }, []);

  const request = requests[1];

  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <div className="mx-auto">
          <div className="schoolInfo col-md-6 col-sm-4 mx-auto">
            <div className="d-flex justify-content-between text-light">
              <div className="card w-100 text-dark bg-light m-3">
                <div className="card-header fs-3"></div>
                <div className="card-body">
                  <div className="card-text fs-4 text-decoration-underline">
                    {}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
