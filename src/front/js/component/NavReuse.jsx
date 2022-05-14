import React, { useState, useEffect, useContext } from "react";
import { DashNavBar } from "../component/DashNavBar.jsx";
import { DashNavItems } from "../component/DashNavItems.jsx";
import { DashDropDown } from "../component/DashDropDown.jsx";
import { DashDropDown2 } from "../component/DashDropDown2.jsx";
import "../../styles/navReuse.css";
import { BsFlag, BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const NavReuse = (props) => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");

  useEffect(() => {
    actions.getSelf().then((payload) => {
      if (payload.msg == "Token has expired") {
        actions.clearSession();
      } else if (payload.first_name) {
        setName("Welcome: " + payload.first_name + " " + payload.last_name);
      } else if (payload.school_name) {
        setName("Welcome: " + payload.school_name);
        setGuardianTask("bg-danger");
      }
    });
  }, []);
  return (
    <div className="navreuse">
      <DashNavBar name={name}>
        <Link to={"/home"}>
          <DashNavItems icon={<GrHomeRounded className="svg" />} />
        </Link>
        <Link to={"/rides/pending"}>
          <DashNavItems icon={<BsFlag className="flag" />} />
        </Link>
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
