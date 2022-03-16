import React, { useState, useContext } from "react";
import "../../styles/profile.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  const [opened, setOpened] = useState(true);

  const [name, setName] = useState("Name");
  const [lastName, setLastName] = useState("Last Name");
  const [seats, setSeats] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("+1 ");
  return (
    <div className="profile">
      <div className="profile-container">
        <div>
          <h2 className="profile-title">My Profile</h2>
          <div className="picture">
            <img src="https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png" />
          </div>
          <div className="profile-information">
            <p>
              First name: {name ? name : ""} {props.first_name}
            </p>
            <p>
              Last Name: {lastName ? lastName : ""} {props.last_name}
            </p>
            <p>
              Seats Available: {seats ? seats : ""} {props.seats_available}
            </p>
            <p>
              Address: {adress ? adress : ""} {props.address}
            </p>
            <p>
              Phone: {phone ? phone : ""} {props.phone}
            </p>
          </div>
        </div>
        <div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              Edit
            </button>
            <div className="dropdown-menu dropdown-profile-menu xxxxxxx">
              <div className="dropdown-information">
                <input
                  type="text"
                  onChange={(e) => setSeats(e.target.value)}
                  value={seats}
                  placeholder="Seats Available"
                />
                <input
                  type="text"
                  onChange={(e) => setAdress(e.target.value)}
                  value={adress}
                  placeholder="Adress"
                />
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
