import React, { useState, useEffect, useContext } from "react";
import SchoolHomeNavbar from "../component/SchoolHomeNavbar";
import "../../styles/index.css";
import "../../styles/SchoolHome.css";

import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SchoolHome = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="SchoolHome">
      <SchoolHomeNavbar />
      <div className="box-modeling">
        <div className="box box-1">
          <h3>Search Guardians</h3>
        </div>
        <div className="box box-2">
          <h3>Edit School</h3>
        </div>
        <div className="box box-3">
          <h3>View Complaints</h3>
        </div>
        <div className="box box-4">
          <h3>Request</h3>
        </div>
      </div>
    </div>
  );
};
