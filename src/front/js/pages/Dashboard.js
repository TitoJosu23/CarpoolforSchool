import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DashNavItems } from "../component/DashNavItems.jsx";
import { GrHomeRounded } from "react-icons/gr";
import "../../styles/dashboard.css";
import { BsFlag } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { DashNavBar } from "../component/DashNavBar.jsx";

// Nav items

// Dashboard
export const Dashboard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <>
      <div>
        {" "}
        <DashNavBar>
          <DashNavItems icon={<GrHomeRounded className="svg" />} />
          <DashNavItems icon={<BsFlag className="flag" />} />
          <DashNavItems icon={<RiMoneyDollarBoxLine className="tip" />} />

          <DashNavItems icon={<BsPerson className="person" />} />
        </DashNavBar>
      </div>
    </>
  );
};
