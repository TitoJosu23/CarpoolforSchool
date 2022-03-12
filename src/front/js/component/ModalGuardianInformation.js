import React from "react";
import "../../styles/modal.css";

export const ModalGuardianInformation = () => {
  return (
    <>
      <div className="guardian-information">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="card">
          <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" />
          <h1>Guardian Name</h1>
          <p className="title">Children's: (first) (second)</p>
          <p className="title">Phone Number: +1-234-567-8900</p>
          <p>Payment Info</p>
          <a href="https://www.paypal.com/us/home" target="_blank">
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
