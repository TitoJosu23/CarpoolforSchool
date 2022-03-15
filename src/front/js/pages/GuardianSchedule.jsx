import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import { AiOutlineCar } from "react-icons/ai";
import "../../styles/guardianSchedule.css";
export const GuardianSchedule = () => {
  return (
    <>
      <NavReuse />
      <div className="form-container">
        <div className="driving-enabled-toggle">
          <DriveEnabledSwitch />
        </div>
        <div className="time-of-day-container">Morning or Afternoon, both</div>
        <div className="days-of-week">Mon, Tues, Wed, Thur, Friday</div>
        <button>Save Settings</button>
        <button>Change Settings</button>
      </div>
    </>
  );
};

const DriveEnabledSwitch = () => {
  const [checked, setChecked] = React.useState([""]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    {
      currentIndex === -1
        ? newChecked.push(value)
        : newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <>
      <List
        className="switch-list"
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#8e9197",
          color: "#dadce1",
        }}
        subheader={<ListSubheader>Drive Settings</ListSubheader>}
      >
        <ListItem>
          <ListItemIcon>
            <AiOutlineCar
              style={{ color: "#d2ffff", height: "1.5em", width: "2.5em" }}
            />
          </ListItemIcon>
          <ListItemText id="switch-list-label-drive" primary="Driver" />
          <Switch
            style={{ color: "d2ffff" }}
            edge="end"
            onChange={handleToggle("drive")}
            checked={checked.indexOf("drive") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-wifi",
            }}
          />
        </ListItem>
      </List>
    </>
  );
};
