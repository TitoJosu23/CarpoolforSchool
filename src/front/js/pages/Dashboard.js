import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DashNavItems } from "../component/DashNavItems.jsx";
import { GrHomeRounded } from "react-icons/gr";

import { GuardianNav } from "../component/GuardianNavBar.jsx";
import { ModalSearchGuardian } from "../component/ModalSearchGuardian";
import { GuardianChildCard } from "../component/GuardianChildCard.jsx";
import { RideRequestDropdown } from "../component/RideRequestDropdown.jsx";
import "../../styles/dashboard.css";
import { SchoolsAcceptedCarousel } from "../component/SchoolsAcceptedCarousel.jsx";
import { IsRole } from "../component/IsRole.jsx";
import { AdminNavBar } from "../component/AdminNavBar.js";

import { BsFlag } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { DashNavBar } from "../component/DashNavBar.jsx";
import { DashDropDown } from "../component/DashDropDown.jsx";
import { CSSTransition } from "react-transition-group";

// Nav items

// Dashboard
export const Dashboard = (props) => {
  const [children, setChildren] = useState([]);
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));

  useEffect(() => {
    actions.getChildren().then((payload) => setChildren(payload));
  }, []);

  if (logStatus === null) {
    history.push("/user/login");
  }
  return (
    <>
      <DashNavBar>
        <DashNavItems icon={<GrHomeRounded className="svg" />} />
        <DashNavItems icon={<BsFlag className="flag" />} />
        <DashNavItems icon={<RiMoneyDollarBoxLine className="tip" />} />

        <DashNavItems icon={<BsPerson className="person" />}>
          <DashDropDown></DashDropDown>
        </DashNavItems>
      </DashNavBar>
      <div className="dashBoardHome">
        <IsRole roles={["guardian"]}>
          <p>Welcome Guardian</p>
          {children.length != 0 ? (
            <RideRequestDropdown children={children} />
          ) : null}
        </IsRole>
        <div
          style={{ backgroundColor: "#F2F2F2" }}
          className="carouselContainer"
        >
          <div className="text">
            <h1>Schools</h1>
          </div>
          <div className="acceptedSchool">
            <h3>Accepted</h3>
            <div>
              <SchoolsAcceptedCarousel />
            </div>
          </div>
          <div className="pendingSchool">
            <h3>Pending</h3>
          </div>
        </div>
      </div>
    </>
  );
};
