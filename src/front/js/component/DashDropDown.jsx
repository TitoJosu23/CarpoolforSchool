import React, { useState, useEffect, useRef, useContext } from "react";
import propTypes from "prop-types";
import { FiSettings } from "react-icons/fi";
import { BsChevronRight, BsSearch, BsMegaphone } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaChild, FaSchool, FaCar, FaCog } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";
import { GrLogout } from "react-icons/gr";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

export const DashDropDown = (props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const history = useHistory();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };
  const DropItem = (props) => {
    return (
      <div className="dropItem">
        <div
          className="menu-item btn"
          onClick={() => {
            if (props.goToMenu) setActiveMenu(props.goToMenu);
            if (props.onClick) props.onClick();
          }}
        >
          <div className={"icon-button" + " " + props.task}>
            {props.leftIcon}
          </div>
          {props.children}
          <div className="icon-right">{props.rightIcon}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="navdropdown"
        style={{ height: "menuHeight" }}
        ref={dropdownRef}
      >
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <Link to={"/user/details"}>
              <DropItem
                leftIcon={<BsPerson className="person" />}
                task={props.guardianStatus}
              >
                My Profile
              </DropItem>
            </Link>
            <div className="mt-3">
              {" "}
              <DropItem
                leftIcon={<FaCog />}
                rightIcon={<BsChevronRight />}
                goToMenu="settings"
              >
                Settings
              </DropItem>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "settings"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropItem goToMenu="main" leftIcon={<AiOutlineArrowLeft />}>
              <h2>Go Back</h2>
            </DropItem>
            <Link to={"/guardian/schedule"}>
              <DropItem leftIcon={<AiOutlineSchedule />}>Schedule</DropItem>
            </Link>
            <DropItem leftIcon={<FaChild />}>Children</DropItem>
            <DropItem leftIcon={<ImEyeBlocked />}>BlackList</DropItem>
            <DropItem
              onClick={() => {
                actions.clearSession();
                history.push("/");
              }}
              leftIcon={<GrLogout />}
            >
              LogOut
            </DropItem>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};
