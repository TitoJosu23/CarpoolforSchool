import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/landingPage.css";

export const LandingPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="landingPage container-fluid d-flex flex-column flex-md-row">
      <div className="guardianView position-relative h-100 d-inline-block w-100 w-md-50">
        <div className="splitText position-absolute top-50 start-50 translate-middle-x bg-dark px-5">
          <p>Guardian</p>
        </div>
      </div>
      <div className="position-relative schoolView h-100 d-inline-block w-100 w-md-50">
        <div className="splitText position-absolute top-50 start-50 translate-middle-x bg-dark px-5">
          <p className="text-center">School</p>
        </div>
      </div>
    </div>
  );
};
