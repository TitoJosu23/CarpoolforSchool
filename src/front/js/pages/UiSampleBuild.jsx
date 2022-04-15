import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import { SearchBar } from "../component/SearchBar.jsx";
import styled from "styled-components";
import { motion } from "framer-motion";

export const UiSampleBuild = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 8em;
  `;
  const [state, setState] = useState("State");

  if (logStatus === null) {
    history.push("/");
  }

  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <AppContainer>
          <SearchBar />
        </AppContainer>
      </div>
    </div>
  );
};
