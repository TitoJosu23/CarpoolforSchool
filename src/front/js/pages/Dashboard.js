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
import { IsRole } from "../component/IsRole.jsx";
import { AdminNavBar } from "../component/AdminNavBar.js";

import { BsFlag } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { DashNavBar } from "../component/DashNavBar.jsx";
import { DashDropDown } from "../component/DashDropDown.jsx";
import { CSSTransition } from "react-transition-group";
import { NavReuse } from "../component/NavReuse.jsx";

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
      <NavReuse />
      <div className="dashBoardHome">
        <IsRole roles={[null]}>
          <p>Welcome User!</p>
        </IsRole>
        <IsRole roles={["admin"]}>
          <p>Welcome Admin!</p>
        </IsRole>
        <IsRole roles={["guardian"]}>
          <p>Welcome Guardian</p>
          {children != null ? (
            <RideRequestDropdown children={children} />
          ) : null}
        </IsRole>
      </div>
    </>
  );
};
