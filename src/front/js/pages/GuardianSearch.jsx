import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import "../../styles/searchGuard.css";
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
  const [guardians, setGuardians] = useState(null);
  useEffect(() => {
    setGuardians(store.guardians);
  }, [store.guardians]);
  if (logStatus === null) {
    history.push("/");
  }
  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <div className="searchGuard-content">
          <h1 className="title">Search Guardians</h1>
          <div className="searchArea container-fluid">
            <GuardianSearchBar
              func={(array) => {
                setGuardians(array);
              }}
            />
            <div className="searchedlist">
              <div className="guardList container mt-5 over">
                <div className="row d-flex justify-content-center">
                  <div className="guardianPanel col-md-6 col-12">
                    <div className="guardianInnerPanel col-12">
                      <ul className="guardLine">
                        {guardians?.map((guardian, index) => {
                          return (
                            <li className="eventItem d-flex justify-content-space-between">
                              <div className="eventText mt-3 p-3 d-flex justify-content-space-between">
                                {guardian.first_name} {guardian.phone}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
