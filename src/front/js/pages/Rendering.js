// Rendering.js

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Rendering = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.img_url}></img>
      <ul className="card-body">
        <h5 className="card-title">{props.first_name}</h5>
        <li className="list-group-item ">Last Name: {props.last_name}</li>
        <li className="list-group-item ">
          Seats: {props.seats_available}
        </li>
        <li className="list-group-item ">Phone Number: {props.phone}</li>
      </ul>
      <div className="cardButtons d-flex"></div>
    </div>
  );
};
