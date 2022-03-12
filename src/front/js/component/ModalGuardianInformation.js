import React from "react";
import "../../styles/modal.css";

export const ModalGuardianInformation = (props) => {
  return (
    <>
      <div className="guardian-information">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="card">
          <img src="https://www.w3schools.com/w3images/team2.jpg" />
          <h1>Name: {props.first_name}</h1>
          <p className="title">Children's: (first) (second)</p>
          <p className="title">Phone Number: {props.phone}</p>
          <p>seats available: {props.seats_available}</p>
          <p>Payment Info: </p>
          <a href={props.payment_info} target="_blank">
            <i className="fa fa-paypal"></i>
          </a>
          <p>
            <button className="button3">Contact</button>
          </p>
        </div>
      </div>
    </>
  );
};
