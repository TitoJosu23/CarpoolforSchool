import React, { useState, useEffect, useRef, useContext } from "react";
import propTypes from "prop-types";
// import "../../styles/dashboard.css";
import { FiSettings } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";
import { GrLogout } from "react-icons/gr";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const DashDropDown = () => {
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
      <>
        <a
          href="#"
          className="menu-item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      </>
    );
  };

  return (
    <>
      <div
        className="dashdropdown dropdown"
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
            <DropItem>My Profile</DropItem>

            <DropItem
              leftIcon={<FiSettings />}
              rightIcon={<BsChevronRight />}
              goToMenu="settings"
            >
              Settings
            </DropItem>
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
              <h2>Preferences</h2>
            </DropItem>
            <DropItem leftIcon={<AiOutlineSchedule />}>
              <div
                onClick={() => {
                  history.push("/user/schedule");
                }}
              >
                Schedule
              </div>
            </DropItem>
            <DropItem leftIcon={<FaChild />}>Children</DropItem>
            <DropItem leftIcon={<ImEyeBlocked />}>BlackList</DropItem>
            <DropItem leftIcon={<GrLogout />}>
              <div
                onClick={() => {
                  actions.clearSession();
                  history.push("/user/login");
                }}
              >
                LogOut
              </div>
            </DropItem>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};
