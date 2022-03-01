import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const GuardianSignup = () => {
  const { store, actions } = useContext(Context);

  return (
    <section className="vh-100" style={{ backgroundColor: "#ACE3E8" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://media.istockphoto.com/photos/stack-of-books-picture-id157482029?k=20&m=157482029&s=612x612&w=0&h=b_0K-1Ut9alhKYu9zlgevSAHDkqSxLF634VDwPw8CHU="
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1"></div>
                      <h4
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Create Account
                      </h4>
                      <label className="form-label" for="form2Example17">
                        First Name
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="first name"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <label className="form-label" for="form2Example17">
                        Last Name
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="last name"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <label className="form-label" for="form2Example27">
                        Gender
                      </label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="exampleRadios1"
                        >
                          Male
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          Female
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          value="option3"
                        />
                        <label
                          className="form-check-label"
                          for="exampleRadios2"
                        >
                          Other
                        </label>
                      </div>
                      <div className="form-outline mb-4" />
                      <label className="form-label" for="form2Example17">
                        Email address
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <label className="form-label" for="form2Example17">
                        Password
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <label className="form-label" for="form2Example17">
                        Confirm Password
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="row mt-4">
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </div>
                      <div className="form-group">
                        <label className="checkbox-inline">
                          <input type="checkbox" required="required" /> I accept
                          the <a href="#">Terms of Use</a> &amp;{" "}
                          <a href="#">Privacy Policy</a>
                        </label>
                      </div>
                      <div className="form-outline mb-4" />
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Create Account
                        </button>
                      </div>
                    </form>
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