import React, { useState, useContext } from "react";
import "../../styles/profile.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  const [opened, setOpened] = useState(true);
  const [name, setName] = useState("Steve");
  const [lastName, setLastName] = useState("Grossman");
  const [seats, setSeats] = useState("4");
  const [address, setAdress] = useState("1023 Burren Drive");
  const [phone, setPhone] = useState("305-323-1223");
  return (
    <div className="profile row">
      <div className="profile-container mt-5 col-lg-4 col-10 mx-auto">
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
                {name ? name : ""} {props.first_name}
                {lastName ? lastName : ""} {props.last_name}
              </p>
              <p className="col-12 text-nowrap fs-5 border-bottom">
                Seats Available <br></br>
                {seats ? seats : ""} {props.seats_available}
              </p>
              <p className="col-12 text-nowrap fs-5 border-bottom pb-3">
                Address <br></br>
                {address ? address : ""} {props.address}
              </p>
              <p className="col-12 text-nowrap fs-5">
                Phone <br></br>
                {phone ? phone : ""} {props.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
