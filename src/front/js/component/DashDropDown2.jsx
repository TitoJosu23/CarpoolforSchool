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

export const DashDropDown2 = (props) => {
  const [activeMenu2, setActiveMenu2] = useState("main2");
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
            if (props.goToMenu) setActiveMenu2(props.goToMenu);
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
        className="navdropdown2"
        style={{ height: "menuHeight" }}
        ref={dropdownRef}
      >
        <CSSTransition
          in={activeMenu2 === "main2"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}
        >
          <div className="menu2">
            <div className="mt-2">
              <DropItem leftIcon={<FaCar />}>Request Ride</DropItem>
            </div>
            <div className="mt-4">
              <Link to={"/guardian/search"}>
                <DropItem leftIcon={<BsSearch />}>Search Guardians</DropItem>
              </Link>
            </div>
            <div className="mt-4">
              <Link to={"/school/search"}>
                <DropItem leftIcon={<FaSchool />}>Search Schools</DropItem>
              </Link>
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};
