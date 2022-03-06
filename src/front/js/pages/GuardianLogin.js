import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/guardianLogin.css";
import { Link } from "react-router-dom";

export const GuardianLogin = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="guardianLogin container-fluid mx-auto">
      <div className="container-fluid card mt-5">
        <div className="container-fluid card-body">
          <form
            className="text-center"
            onSubmit={(e) => {
              actions.createNewSession(email, password).then((session) => {
                history.push("/");
              });
              e.preventDefault();
            }}
          >
            <h3 className="fw-normal mb-3 pb-3">Sign into your account</h3>
            <div className="mb-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Email address</label>
            </div>
            <div className="mb-4">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Password</label>
            </div>
            <div className="routeCont container-fluid d-flex justify-content-between">
              <div className="mt-4">
                <Link className="route" to="/user/create">
                  New User?
                </Link>
              </div>
              <div>
                <p className="btn btn-secondary ms-5">Submit</p>
              </div>
              <div className="mt-4">
                <Link className="route" to="/guardian/reset">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
