import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Registration = (props) => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [registerStatus, setRegisterStatus] = useState("Select Account Type");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [step, setStep] = useState(["oneActive", "twoActive"]);
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState("");

  const nextStep = (x) => {
    if (x < step.length) {
      setCount(x + 1);
      console.log(count);
    } else if (x == step.length - 1) {
      setCount(0);
      console.log(count);
    }
  };
  const previousStep = (x) => {
    setCount(x - 1);
  };

  return (
    <section className="vh-100 register" style={{ backgroundColor: "#ACE3E8" }}>
      <div className="container py-5 h-100">
        <div
          className={
            "row justify-content-center align-items-center " +
            `${registerStatus != "Select Account Type" && "h-100"}`
          }
        >
          <div className="">
            <img
              onClick={() => history.push("/")}
              src={logo}
              alt="login form"
              wwwwwwwwwwwwww
              className={
                "img-fluid btn " +
                `${registerStatus != "Select Account Type" && "d-none"}`
              }
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
            <div
              className={
                "" + `${registerStatus != "Select Account Type" && "card"}`
              }
              style={{ borderRadius: "1rem" }}
            >
              <div className="row g-0 justify-content-between">
                <button
                  className={
                    "fw-normal dropdownToggle text-break border-2 border-dark rounded-3 col-md-6 mx-auto " +
                    hide
                  }
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {registerStatus}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end border-0 justify-content-center"
                  aria-labelledby="dropdownMenu2"
                >
                  <li
                    className="dropdown-item mt-3 btn border border-2 border-dark"
                    onClick={() => {
                      setRegisterStatus("Create Guardian Account"),
                        setHide("d-none");
                    }}
                  >
                    <div className="dropOption">Guardian</div>
                  </li>
                  <li
                    className="dropdown-item btn border mt-3 border-2 border-dark"
                    onClick={() => {
                      setRegisterStatus("Register School"), setHide("d-none");
                    }}
                  >
                    <div className="dropOption">Admin</div>
                  </li>
                </ul>
                <div className="row">
                  {" "}
                  <div
                    className={
                      "leftCard col-6 d-none " +
                      `${
                        registerStatus != "Select Account Type" && "d-md-block"
                      }`
                    }
                  >
                    <img
                      onClick={() => history.push("/")}
                      src={logo}
                      alt="login form"
                      className="img-fluid btn mt-4"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div
                    className={
                      "col-6 d-none ms-auto " +
                      `${registerStatus != "Select Account Type" && "inActive"}`
                    }
                  >
                    <img
                      className="img-fluid "
                      src="https://media0.giphy.com/media/8ZbxIR8E8PCgG0RPr3/giphy.gif?cid=6c09b9526sw5ut0wuqplu2msps9tkbcjv2ae922ky55io2qs&rid=giphy.gif&ct=s"
                    ></img>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                    <div
                      className={
                        "formContainer ms-4 form-floating card-body text-black " +
                        `${
                          (registerStatus == "Register School" ||
                            registerStatus == "Select Account Type") &&
                          "inActive"
                        }`
                      }
                    >
                      <div className="progressContainer mt-4 mb-5">
                        <div
                          className={`${
                            registerStatus == "Select Account Type" &&
                            "progressHidden"
                          }`}
                        >
                          <div className="progressBar row">
                            <div
                              className={`${
                                step[count] == "oneActive"
                                  ? "progress1"
                                  : "progress2"
                              }`}
                            ></div>
                            <div className="progressStep col">Login</div>
                            <div className="progressStep col">Info</div>
                          </div>
                        </div>
                      </div>
                      {error && (
                        <div className="alert alert-danger">{error}</div>
                      )}
                      <form
                        className={`${
                          step[count] != "oneActive" && "inActive"
                        }`}
                      >
                        {/* This is the Dropdown Selector */}
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
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) =>
                                setPasswordConfirm(e.target.value)
                              }
                              type="password"
                              id="floatingConfirmPass"
                              placeholder="Password"
                              className="form-control form-control-lg"
                            />
                            <label className="" for="floatingConfirmPass">
                              Confirm Password
                            </label>
                            <div className="buttonContainer d-flex justify-content-center mt-4 ">
                              <p
                                onClick={() => nextStep(count)}
                                className="btn border-1 border-dark nextBtn"
                              >
                                Next
                              </p>
                            </div>
                            <Link className="text-primary" to={"/"}>
                              Back To Login
                            </Link>
                          </div>
                        </div>
                      </form>
                      <form
                        className={`${
                          step[count] != "twoActive" && "inActive"
                        }`}
                      >
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) => setFirstName(e.target.value)}
                              type="text"
                              id="floatingFirst"
                              placeholder="First Name"
                              className="form-control form-control-lg"
                            />
                            <label for="floatingFirst">First Name</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) => setLastName(e.target.value)}
                              type="text"
                              id="floatingLast"
                              placeholder="Last Name"
                              className="form-control form-control-lg"
                            />
                            <label className="" for="floatingLast">
                              Last Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) => setPhone(e.target.value)}
                              type="text"
                              id="floatingPhone"
                              placeholder="Phone Number"
                              className="form-control form-control-lg"
                            />
                            <label className="" for="floatingPhone">
                              Phone Number
                            </label>
                            <div className="buttonContainer d-flex justify-content-between mt-4 ">
                              {" "}
                              <p
                                onClick={() => previousStep(count)}
                                className="btn previousBtn border-1 border-dark"
                              >
                                Previous
                              </p>
                              <p
                                onClick={(e) => {
                                  actions
                                    .addChild(firstName, lastName, grade, age)
                                    .then(history.push("/"));
                                }}
                                className="btn submitBtn border-1 border-dark"
                              >
                                Submit
                              </p>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className={
                        "formContainer ms-4 form-floating card-body text-black " +
                        `${
                          (registerStatus == "Create Guardian Account" ||
                            registerStatus == "Select Account Type") &&
                          "inActive"
                        }`
                      }
                    >
                      <div className="progressContainer mt-4 mb-5">
                        <div
                          className={`${
                            registerStatus == "Select Account Type" &&
                            "progressHidden"
                          }`}
                        >
                          <div className="progressBar row">
                            <div
                              className={`${
                                step[count] == "oneActive"
                                  ? "progress1"
                                  : "progress2"
                              }`}
                            ></div>
                            <div className="progressStep col">Login</div>
                            <div className="progressStep col">Info</div>
                          </div>
                        </div>
                      </div>
                      {error && (
                        <div className="alert alert-danger">{error}</div>
                      )}
                      <form
                        className={`${
                          step[count] != "oneActive" && "inActive"
                        }`}
                      >
                        {/* This is the Dropdown Selector */}
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
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) =>
                                setPasswordConfirm(e.target.value)
                              }
                              type="password"
                              id="floatingConfirmPass"
                              placeholder="Password"
                              className="form-control form-control-lg"
                            />
                            <label className="" for="floatingConfirmPass">
                              Confirm Password
                            </label>
                            <div className="buttonContainer d-flex justify-content-center mt-4 ">
                              <p
                                onClick={() => nextStep(count)}
                                className="btn border-1 border-dark nextBtn"
                              >
                                Next
                              </p>
                            </div>
                            <Link className="text-primary" to={"/"}>
                              Back To Login
                            </Link>
                          </div>
                        </div>
                      </form>
                      <form
                        className={`${
                          step[count] != "twoActive" && "inActive"
                        }`}
                      >
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) => setSchoolName(e.target.value)}
                              type="text"
                              id="floatingSchoolName"
                              placeholder="School Name"
                              className="form-control form-control-lg"
                            />
                            <label for="floatingFirst">School Name</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) => setSchoolAddress(e.target.value)}
                              type="text"
                              id="floatingAddress"
                              placeholder="School Address"
                              className="form-control form-control-lg"
                            />
                            <label className="" for="floatingAddress">
                              School Address
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="form-outline form-floating mb-4">
                            <input
                              onChange={(e) => setPhone(e.target.value)}
                              type="text"
                              id="floatingPhone"
                              placeholder="School Phone"
                              className="form-control form-control-lg"
                            />
                            <label className="" for="floatingPhone">
                              School Phone
                            </label>
                            <div className="buttonContainer d-flex justify-content-between mt-4 ">
                              {" "}
                              <p
                                onClick={() => previousStep(count)}
                                className="btn previousBtn border-1 border-dark"
                              >
                                Previous
                              </p>
                              <p
                                onClick={async() => {
                                  actions
                                    .createUser(email, password)
                                    .then(
                                      actions.createSchool(
                                        school_name,
                                        school_address,
                                        school_phone
                                      )
                                    )
                                    .then(history.push("/home"));
                                }}
                                className="btn submitBtn border-1 border-dark"
                              >
                                Submit
                              </p>
                            </div>
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
