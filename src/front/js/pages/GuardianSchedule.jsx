import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import { DaysOfWeekCards } from "../component/DaysOfWeekCards.jsx";
import "../../styles/guardianSchedule.css";

// import { Box, Text, Grid } from "grommet";

import {
  Page,
  PageContent,
  Heading,
  Paragraph,
  Box,
  Button,
  Grommet,
  Text,
  Accordion,
  AccordionPanel,
  Form,
  FormField,
  Select,
} from "grommet";

const theme = {
  global: {
    font: {
      family: `-apple-system,
           BlinkMacSystemFont,
           "Segoe UI"`,
    },
  },

  page: {
    full: {
      alignSelf: "center",
      width: {
        min: "200px",
        max: "500px",
      },
      small: {
        pad: "medium",
        margin: { vertical: "small", horizontal: "small" },
      },
      medium: {
        pad: "medium",
        margin: { vertical: "small", horizontal: "small" },
      },
      large: {
        pad: "medium",
        margin: { vertical: "small", horizontal: "small" },
      },
    },
  },
  box: {
    margin: { vertical: "medium" },
  },
};

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);
export const GuardianSchedule = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  //declare states here vvvv
  const [state, setState] = useState("State");
  const [background, setBackground] = useState([""]);

  return (
    <div className="dashBody w-100">
      <NavReuse />

      <Grommet theme={theme}>
        <Page kind="full">
          <PageContent background="light-3">
            <DaysOfWeekCards />
          </PageContent>
        </Page>
      </Grommet>
    </div>
  );
};
