import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "../store/appContext";

const GuardianInfoContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

const GuardThumbNail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;
  img {
    width: auto;
    height: 100%;
  }
`;

const NameGuard = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

const PhoneNumber = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;

export function GuardianLabel(props) {
  useEffect(() => {
    setGuardians(store.guardians);
  }, [store.guardians]);
  const { store, actions } = useContext(Context);

  const [guardians, setGuardians] = useState([]);

  return (
    <>
      {guardians?.map((guardian, index) => {
        <GuardianInfoContainer>
          <NameGuard>{guardian.first_name}</NameGuard>
          <PhoneNumber>{guardian.phone}</PhoneNumber>
        </GuardianInfoContainer>;
      })}
    </>
  );
}
