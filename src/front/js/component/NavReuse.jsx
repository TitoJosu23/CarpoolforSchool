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

export const NavReuse = () => {
  return (
    <>
      {" "}
      <DashNavBar>
        <DashNavItems icon={<GrHomeRounded className="svg" />} />
        <DashNavItems icon={<BsFlag className="flag" />} />
        <DashNavItems icon={<RiMoneyDollarBoxLine className="tip" />} />

        <DashNavItems icon={<BsPerson className="person" />}>
          <DashDropDown></DashDropDown>
        </DashNavItems>
      </DashNavBar>
    </>
  );
};
