import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { NavReuse } from "../component/NavReuse.jsx";

import "../../styles/guardianSchedule.css";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const GuardianSchedule = () => {
  return (
    <div>
      <NavReuse />
      <div className="guardian-schedule">
        <h2>Schedule</h2>
        <div className="container-sc">
          <div>
            <FormControlLabel
              className="switch"
              value="start"
              labelPlacement="start"
              control={<Switch />}
              label="Driver"
            />
          </div>
          <div>
            <FormControlLabel
              className="switch"
              value="start"
              labelPlacement="start"
              control={<Switch />}
              label="Available"
            />
          </div>
          <div>
            <FormControlLabel
              className="switch"
              value="start"
              labelPlacement="start"
              control={<Switch />}
              label="Morning  "
            />
          </div>
          <div>
            <FormControlLabel
              className="switch"
              value="start"
              labelPlacement="start"
              control={<Switch />}
              label="Afternoon  "
            />
          </div>
          <div>
            <FormControlLabel
              className="switch"
              value="start"
              labelPlacement="start"
              control={<Switch />}
              label="Monday  "
            />
          </div>
          <div>
            <FormControlLabel
              className="switch"
              value="start"
              labelPlacement="start"
              control={<Switch />}
              label="Tuesday  "
            />
          </div>
          <div>
            <FormControlLabel
              className="switch"
              value="start"
              labelPlacement="start"
              control={<Switch />}
              label="Wednesday  "
            />
          </div>
          <div>
            <FormControlLabel
              className="switch"
              value="start"
              labelPlacement="start"
              control={<Switch />}
              label="Thursday  "
            />
          </div>
          <div>
            <FormControlLabel
              className="switch"
              value="start"
              labelPlacement="start"
              control={<Switch />}
              label="Friday  "
            />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};
