import React, { useState, useContext } from "react";
import "../../styles/profile.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ChildCard = (props) => {
  return (
    <div className="profile row">
      <div className="childCard mt-5 col-lg-4 col-10 mx-auto">
        {" "}
        <div>
          <div className="picture">
            <img
              className="img-fluid"
              src="https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png"
            />
          </div>
          <div className="profile-information">
            <div className="row justify-content-center">
              <p className="col-12 text-nowrap fs-1">
                {props.first_name}
                {props.last_name}
              </p>
              <p className="col-12 text-nowrap fs-5 border-bottom">
                Class Grade <br></br>
                {props.seats_available}
              </p>
              <p className="col-12 text-nowrap fs-5 border-bottom pb-3">
                Age <br></br>
                {props.address}
              </p>
            </div>
            <div className="cardButtons row justify-content-center">
              <button className="btn requestButton col-8 mb-3 fs-4">
                Request Ride
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
