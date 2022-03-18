import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DashNavItems } from "../component/DashNavItems.jsx";
import { GrHomeRounded } from "react-icons/gr";

import { ModalSearchGuardian } from "../component/ModalSearchGuardian";
import { GuardianChildCard } from "../component/GuardianChildCard.jsx";
import { RideRequestDropdown } from "../component/RideRequestDropdown.jsx";
import { IsRole } from "../component/IsRole.jsx";
import { ActivityFeed } from "../component/ActivityFeed.jsx";
import { ScrollingComponents } from "../component/ScrollingComponents.jsx";

import { BsFlag } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { DashNavBar } from "../component/DashNavBar.jsx";
import { DashDropDown } from "../component/DashDropDown.jsx";
import { CSSTransition } from "react-transition-group";
import { NavReuse } from "../component/NavReuse.jsx";
import { Profile } from "../component/Profile.jsx";

// Nav items

// Dashboard
export const Dashboard = (props) => {
  const [children, setChildren] = useState([]);
  const [name, setName] = useState("");
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));

  useEffect(() => {
    actions.getChildren().then((payload) => setChildren(payload));
  }, []);

  if (logStatus === null) {
    history.push("/");
  }
  console.log(name);
  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <IsRole roles={[null]}>
          <h2 className="text-light">THIS WILL NOT EXIST!</h2>
        </IsRole>
        <IsRole roles={["admin"]}>
          <h2 className="text-light">ADMIN RENDER HERE</h2>
        </IsRole>
        <IsRole roles={["guardian"]}>
          <ActivityFeed />
          {/* <Profile /> */}
        </IsRole>
      </div>
    </div>
  );
};

// ride request conditional render
// {children != null ? (
//   <RideRequestDropdown children={children} />
// ) : null}
