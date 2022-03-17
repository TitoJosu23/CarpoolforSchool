import React from "react";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <div className="guardianLogin container-fluid mx-auto">
      <div className="container-fluid card">
        <div className="container-fluid card-body">
          <form className="text-center">
            <h3 className="fw-normal mb-3 pb-3">Forgot Your Password?</h3>
            <div className="mb-4">
              <input
                placeholder="Email adress"
                type="email"
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Please enter your email</label>
            </div>
            <div className="loginBtn">
              <button className="btn btn-dark">Submit</button>
            </div>
            <div className="d-inline-block text-center">
              <Link to={"/user/create"}>
                <p className="text-center">New Account!</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
