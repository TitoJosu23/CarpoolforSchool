import React, { useState, useContext } from "react";
import "../../styles/profile.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ChildCard = (props) => {
  return (
    <div className="profile childRow row">
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
              <div className="col-12 text-nowrap fs-1 text-dark">
                {props.first_name} {props.last_name}
              </div>
              <div className="col-12 text-nowrap fs-5 border-bottom text-dark m-0 pb-3">
                <br></br>
                {props.class_grade}
              </div>
              <div className="col-12 text-nowrap fs-5 border-bottom text-dark mb-3 pb-3">
                <br></br>
                {props.age}
              </div>
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
