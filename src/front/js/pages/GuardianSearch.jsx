import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import { GuardianSearchBar } from "../component/GuardianSearchBar.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const GuardianSearch = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  const [state, setState] = useState("State");
  const [guardians, setGuardians] = useState([]);

  useEffect(() => {
    setGuardians(store.guardians);
  }, [store.guardians]);
  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <div className="searchGuard-content">
          <div className="searchArea mt-3 container-fluid">
            <GuardianSearchBar guardians={guardians} />
          </div>
        </div>
      </div>
    </div>
  );
};
