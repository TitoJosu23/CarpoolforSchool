import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ChildrenToDrive } from "../component/ChildrenToDrive.jsx";
import { RequestRideButton } from "../component/RequestRideButton.jsx";
import { RideRequestDialog } from "../component/RideRequestDialog.jsx";
export const RequestRide = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));

  //declare states here vvvv
  const [state, setState] = useState("State");

  if (logStatus === null) {
    history.push("/");
  }

  return (
    <div className="dashBody w-100">
      <NavReuse />
      <div className="dashBoardHome">
        <RideRequestDialog />
      </div>
    </div>
  );
};
{
  /* <Box
sx={{
  width: 300,
  height: 400,
  backgroundColor: "#d6ecef",
  margin: "auto",
}}
>
<ChildrenToDrive />
<Divider sx={{ marginTop: "1em" }} light />
<Box sx={{ mt: 3, ml: 1, mb: 1 }}>
  <RequestRideButton />
</Box>
</Box> */
}
