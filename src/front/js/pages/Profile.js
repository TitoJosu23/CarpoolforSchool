import React, { useState, useContext } from "react";
import "../../styles/profile.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  const [opened, setOpened] = useState(true);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [seats, setSeats] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("+1 ");
  return (
    <div className="profile">
      <div>
        <h2 className="profile-title">My Profile</h2>
        <div className="picture">
          <img src="https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png" />
        </div>
        <div className="profile-information">
          <p>
            First name:{" "}
            <button type="button" className="">
              edit.
            </button>
            {name ? name : ""} {props.first_name}
          </p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <p>
            Last Name: {lastName ? lastName : ""} {props.last_name}
          </p>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <p>
            Seats Available: {seats ? seats : ""} {props.seats_available}
          </p>
          <input
            type="text"
            onChange={(e) => setSeats(e.target.value)}
            value={seats}
          />
          <p>
            Address: {adress ? adress : ""} {props.address}
          </p>
          <input
            type="text"
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
          />
          <p>
            Phone: {phone ? phone : ""} {props.phone}
          </p>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
      </div>
    </div>
  );
};
