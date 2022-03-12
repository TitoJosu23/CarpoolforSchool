import React from "react";
import { ModalSearchGuardian } from "../component/ModalSearchGuardian";
import { ModalGuardianInformation } from "../component/ModalGuardianInformation";
import "../../styles/modal.css";

export const ModalView = () => {
  return (
    <div className="modalview">
      <h2>Modal view</h2>
      <ModalSearchGuardian />
      <ModalGuardianInformation />
    </div>
  );
};