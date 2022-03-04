import React, { useState, useEffect, useContext } from "react";
import SchoolHomeNavbar from "../component/SchoolHomeNavbar";
import "../../styles/index.css";

import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SchoolHome = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <SchoolHomeNavbar />
      <div>
        <div class="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
