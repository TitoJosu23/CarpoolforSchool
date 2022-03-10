import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import "../../styles/GuardianNavBar.css";

export const IsRole = (props) => {
  const session = JSON.parse(localStorage.getItem("session"));
  if (
    !Array.isArray(session.roles) ||
    session.roles.filter((r) => props.roles.includes(r.role)).length === 0
  )
    return null;
  else {
    return props.children;
  }
};
