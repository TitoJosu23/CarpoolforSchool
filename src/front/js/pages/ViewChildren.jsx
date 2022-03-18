import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import { ChildCard } from "../component/ChildCard.jsx";

export const ViewChildren = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  //declare states here vvvv
  const [children, setChildren] = useState([]);

  useEffect(() => {
    actions.getChildren().then((payload) => setChildren(payload));
  }, []);

  if (logStatus === null) {
    history.push("/");
  }

  console.log(children);
  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        {children?.map((child, index) => {
          return (
            <ChildCard
              first_name={child.first_name}
              last_name={child.last_name}
              class_grade={child.class_grade}
              age={"Age"}
            />
          );
        })}
      </div>
    </div>
  );
};
