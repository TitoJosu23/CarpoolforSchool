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
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavReuse = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);

  return (
    <>
      {" "}
      <DashNavBar>
        <DashNavItems
          icon={
            <GrHomeRounded
              onClick={() => {
                history.push("/user/home");
              }}
              className="svg"
            />
          }
        />
=======
import { Context } from "../store/appContext";

export const NavReuse = (props) => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  useEffect(() => {
    actions
      .getSelf()
      .then((payload) => setName(payload.first_name + " " + payload.last_name));
  }, []);
  return (
    <>
      {" "}
      <DashNavBar name={name}>
        <DashNavItems icon={<GrHomeRounded className="svg" />} />
>>>>>>> 8c41aed3e0f8d8de56979d6f39376aa208c77ae2
        <DashNavItems icon={<BsFlag className="flag" />} />
        <DashNavItems icon={<RiMoneyDollarBoxLine className="tip" />} />

        <DashNavItems icon={<BsPerson className="person" />}>
          <DashDropDown></DashDropDown>
        </DashNavItems>
      </DashNavBar>
    </>
  );
};
