import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { NavReuse } from "../component/NavReuse.jsx";
import { AdminProfileDetails } from "../component/AdminProfileDetails.js";

export const AdminDetails = () => {
  return (
    <>
      <NavReuse />
      <div>
        <AdminProfileDetails />
      </div>
    </>
  );
};
