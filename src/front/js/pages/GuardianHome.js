import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { GuardianNav } from "../component/GuardianNav.jsx";

export const GuardianHome = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <>
      <GuardianNav />
      <div>GUARDIAN HOME</div>;
    </>
  );
};
