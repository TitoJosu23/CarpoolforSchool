import React, { useState, useContext } from "react";
import "../../styles/profile.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  return (
    <div className="profile">
      <div>
        <h2>My Profile</h2>
        <img src="https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png" />
        <p>First name: {props.first_name}</p>
        <p>Last Name: {props.last_name}</p>
        <p>Seats Available: {props.seats_available}</p>
        <p>Address: {props.address}</p>
        <p>Phone: {props.phone}</p>
      </div>
    </div>
  );
};
