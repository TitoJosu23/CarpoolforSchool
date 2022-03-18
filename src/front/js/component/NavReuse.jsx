import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { DashNavBar } from "../component/DashNavBar.jsx";
import { DashNavItems } from "../component/DashNavItems.jsx";
import { DashDropDown } from "../component/DashDropDown.jsx";
import "../../styles/navReuse.css";
import { BsFlag } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const NavReuse = (props) => {
  const { store, actions } = useContext(Context);
  const [guardianTask, setGuardianTask] = useState("");
  const [childrenTask, setChildrenTask] = useState("");
  const [name, setName] = useState("");
  const [payload, setPayLoad] = useState("");

  useEffect(() => {
    actions.getSelf().then((payload) => {
      console.log("THIS IS THE PAYLOAD" + payload);
      if (payload === "No Guardian Found") {
        setName("Welcome");
        setGuardianTask("bg-danger");
      } else if (payload === undefined) {
        setTimeout(actions.clearSession()[10000]);
        setName("Session Expired!");
      } else {
        setName("Welcome: " + payload.first_name + " " + payload.last_name);
      }
    });
  }, []);
  return (
    <div className="navreuse">
      <DashNavBar name={name}>
        <Link to={"/home"}>
          <DashNavItems icon={<GrHomeRounded className="svg" />} />
        </Link>
        <DashNavItems icon={<BsFlag className="flag" />} />
        <DashNavItems icon={<RiMoneyDollarBoxLine className="tip" />} />
        <DashNavItems
          task={guardianTask}
          icon={<BsPerson className="person" />}
        >
          <DashDropDown guardianStatus={guardianTask}></DashDropDown>
        </DashNavItems>
      </DashNavBar>
    </div>
  );
};
