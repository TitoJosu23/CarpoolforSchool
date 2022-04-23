import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { DashNavBar } from "../component/DashNavBar.jsx";
import { DashNavItems } from "../component/DashNavItems.jsx";
import { DashDropDown } from "../component/DashDropDown.jsx";
import { DashDropDown2 } from "../component/DashDropDown2.jsx";
import "../../styles/navReuse.css";
import { BsFlag, BsSearch } from "react-icons/bs";
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
      console.log(payload);
      if (payload.school_name) {
        setName("Welcome: " + payload.school_name);
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
        <DashNavItems icon={<BsSearch className="Search" />}>
          <DashDropDown2></DashDropDown2>
        </DashNavItems>
        <DashNavItems icon={<BsPerson className="person" />}>
          <DashDropDown></DashDropDown>
        </DashNavItems>
      </DashNavBar>
    </div>
  );
};
