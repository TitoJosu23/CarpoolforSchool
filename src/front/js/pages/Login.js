import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "/workspace/CarpoolforSchool/src/front/img/logo.png";

export const Login = (props) => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginMsg, setLoginMsg] = useState("Log In To Your Account");
  const logStatus = JSON.parse(localStorage.getItem("session"));

  if (logStatus != null) {
    history.push("/home");
  }

  return (
    <section className="vh-100 register" style={{ backgroundColor: "#ACE3E8" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0 justify-content-between">
                <div className="row">
                  {" "}
                  <div className="leftCard col-6 d-none d-md-block">
                    <img
                      src={logo}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="formContainer form-floating card-body ms-4 text-black ">
                      {error && (
                        <div className="alert alert-danger">{error}</div>
                      )}
                      <h1 className="mb-5">{loginMsg}</h1>
                      <form
                        onSubmit={(e) => {
                          actions
                            .createNewSession(email, password)
                            .then((session) => {
                              if (
                                session == "User Not Found!" ||
                                session == undefined
                              ) {
                                setEmail("");
                                setPassword("");
                                setLoginMsg("Login Failed!");
                              } else {
                                history.push("/home");
                              }
                            });
                          e.preventDefault();
                        }}
                      >
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              id="floatingEmail"
                              placeholder="Email"
                              className="form-control form-control-lg"
                            />
                            <label for="floatingEmail">Email address</label>
                            <div>
                              {" "}
                              <Link
                                className="text-primary"
                                to={"/registration"}
                              >
                                New Member?
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              id="floatingPassword"
                              placeholder="Password"
                              className="form-control form-control-lg"
                            />
                            <label className="" for="floatingPassword">
                              Password
                            </label>
                            <div>
                              {" "}
                              <Link className="text-primary" to={"/forgot"}>
                                Forgot Password?
                              </Link>
                            </div>
                            <button className="btn border-2 border-dark col nextBtn">
                              Login
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
