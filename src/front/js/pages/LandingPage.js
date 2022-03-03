import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const LandingPage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <Link to={"/user/create"}>
        <button>User Create</button>
      </Link>
      <Link to={"/guardian/home"}>
        <button>Guardian Home</button>
      </Link>
      <Link to={"/guardian/login"}>
        <button>Guardian Login</button>
      </Link>
      <Link to={"/school/create"}>
        <button>School Create</button>
      </Link>
      <Link to={"/school/login"}>
        <button>School Login</button>
      </Link>
      <Link to={"/school/home"}>
        <button>School Home</button>
      </Link>
    </div>
  );
};
