import React, { useContext, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { NavReuse } from "../component/NavReuse.jsx";

import "../../styles/guardianSchedule.css";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const GuardianSchedule = () => {
  const [driver, setDriver] = useState(false);
  const [available, setAvailable] = useState(false);
  const [morning, setMorning] = useState(false);
  const [afternoon, setAfternoon] = useState(false);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);

  return (
    <div>
      <NavReuse />
      <div className="schedule row d-flex justify-content-center">
        <div className="guardian-schedule col-12">
          <h2>Schedule</h2>
          <div className="row">
            <div>
              <FormControlLabel
                onChange={(e) => {
                  if (!driver ? setDriver(true) : setDriver(false));
                }}
                className="switch"
                value="start"
                labelPlacement="start"
                control={<Switch />}
                label=""
              />
            </div>
            <div>
              <FormControlLabel
                onChange={(e) => {
                  if (!available ? setAvailable(true) : setAvailable(false));
                }}
                className="switch"
                value="start"
                labelPlacement="start"
                control={<Switch />}
                label=""
              />
            </div>
            <div>
              <FormControlLabel
                onChange={(e) => {
                  if (!morning ? setMorning(true) : setMorning(false));
                }}
                className="switch"
                value="start"
                labelPlacement="start"
                control={<Switch />}
                label=""
              />
            </div>
            <div>
              <FormControlLabel
                onChange={(e) => {
                  if (!afternoon ? setAfternoon(true) : setAfternoon(false));
                }}
                className="switch"
                value="start"
                labelPlacement="start"
                control={<Switch />}
                label=""
              />
            </div>
            <div>
              <FormControlLabel
                onChange={(e) => {
                  if (!monday ? setMonday(true) : setMonday(false));
                }}
                className="switch"
                value="start"
                labelPlacement="start"
                control={<Switch />}
                label=""
              />
            </div>
            <div>
              <FormControlLabel
                onChange={(e) => {
                  if (!tuesday ? setTuesday(true) : setTuesday(false));
                }}
                className="switch"
                value="start"
                labelPlacement="start"
                control={<Switch />}
                label=""
              />
            </div>
            <div>
              <FormControlLabel
                onChange={(e) => {
                  if (!wednesday ? setWednesday(true) : setWednesday(false));
                }}
                className="switch"
                value="start"
                labelPlacement="start"
                control={<Switch />}
                label=""
              />
            </div>
            <div>
              <FormControlLabel
                onChange={(e) => {
                  if (!thursday ? setThursday(true) : setThursday(false));
                }}
                className="switch"
                value="start"
                labelPlacement="start"
                control={<Switch />}
                label=""
              />
            </div>
            <div>
              <FormControlLabel
                onChange={(e) => {
                  if (!friday ? setFriday(true) : setFriday(false));
                }}
                className="switch"
                value="start"
                labelPlacement="start"
                control={<Switch />}
                label=""
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
