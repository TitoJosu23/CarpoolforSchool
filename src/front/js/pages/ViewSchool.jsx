import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import "../../styles/schoolView.css";
import { toast } from "react-toastify";

export const ViewSchool = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  //declare states here vvvv
  const [state, setState] = useState("State");
  const schools = store.schools;
  const id = params.id;
  let found_school = {};

  if (logStatus === null) {
    history.push("/");
  }

  const use_school = () => {
    for (let i = 0; i < schools.length; i++) {
      found_school = schools[i];
      if (found_school.School_Id == id) {
        return found_school;
      }
    }
  };

  use_school();
  console.log(found_school);
  console.log(found_school.School_logo_url);

  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <div className="col-8 mx-auto my-3 bg-transparent">
          <img
            className="img-fluid col-lg-4 bg-transparent"
            src={found_school.School_logo_url}
          ></img>
        </div>
        <div className="mx-auto">
          <div className="schoolInfo col-md-6 col-sm-4 mx-auto">
            <div className="d-flex justify-content-between text-light">
              <div className="card w-50 text-dark bg-light m-3">
                <div className="card-header fs-3">Contact</div>
                <div className="card-body">
                  <div className="card-text fs-4 text-decoration-underline">
                    Phone
                  </div>
                  <div>{found_school.School_phone}</div>
                  <div className="card-text mt-3 fs-4 text-decoration-underline">
                    Address
                  </div>
                  <div>{found_school.School_address}</div>
                </div>
              </div>
              <div className="card w-50 text-dark bg-light m-3">
                <div className="card-header fs-3">Activity</div>
                <div className="card-body">
                  <div className="card-text fs-4 text-decoration-underline">
                    Guardians
                  </div>
                  <div>{"309 Enrolled"}</div>
                  <div className="card-text mt-3 fs-4 text-decoration-underline">
                    Rides
                  </div>
                  <div>{"3 Pending"}</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                actions.reqAccess(id).then((payload) => console.log(payload));
              }}
              className="btn btn-light my-3 fs-2"
            >
              Request Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
