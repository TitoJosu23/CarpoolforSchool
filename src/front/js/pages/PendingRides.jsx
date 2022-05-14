import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import { toast } from "react-toastify";

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
            <div className="text-light fs-1">1 Pending Request</div>
            <div className="d-flex justify-content-between text-light">
              <div className="card w-100 text-dark bg-light m-3">
                <div className="card-header fs-3">School: Miami High</div>
                <div className="card-body row">
                  <div className="card-text fs-5">Hellen Grossman</div>
                  <div className="card-text mt-4 fs-4">Day: Monday</div>
                  <div className="card-text mt-4 fs-4">Time: Morning</div>
                </div>
                <button
                  onClick={() => {
                    toast.info("Ride Accepted, Guardian Notified!", {
                      position: "top-center",
                    });
                  }}
                  className="btn w-50 mx-auto mb-3 btn-light border-dark"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
