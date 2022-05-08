import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavReuse } from "../component/NavReuse.jsx";
import { Calendar } from "grommet-icons";
// import { Box, Text, Grid } from "grommet";

import {
  Page,
  PageContent,
  Heading,
  Paragraph,
  Box,
  Card,
  CardBody,
  CardFooter,
  Grid,
  Grommet,
  Text,
} from "grommet";

const data = [
  {
    color: "#d6ecef",
    icon: <Calendar size="large" />,
    title: "Monday",
    subTitle: "Weekday",
    message: "Schedule",
  },
  {
    color: "#d6ecef",
    icon: <Calendar size="large" />,
    title: "Tuesday",
    subTitle: "Weekday",
    message: "Schedule",
  },
  {
    color: "#d6ecef",
    icon: <Calendar size="large" />,
    title: "Wednesday",
    subTitle: "Weekday",
    message: "Schedule",
  },
  {
    color: "#d6ecef",

    icon: <Calendar size="large" />,
    title: "Thursday",
    subTitle: "WeekdaY",
    message: "Schedule",
  },
  {
    color: "#d6ecef",

    icon: <Calendar size="large" />,
    title: "Friday",
    subTitle: "Weekday",
    message: "Schedule",
  },
];

const theme = {
  global: {
    font: {
      family: `-apple-system,
           BlinkMacSystemFont,
           "Segoe UI"`,
    },
  },
  card: {
    footer: {
      pad: { horizontal: "medium", vertical: "small" },
      background: "#FFFFFF27",
    },
    hover: {
      container: {
        elevation: "large",
        background: "#90EE90",
      },
    },
    container: {
      elevation: "medium",
      extend: `transition: all 0.2s ease-in-out;`,
    },
    footer: {
      pad: { horizontal: "medium", vertical: "small" },
      background: "#00000008",
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
          <PageContent background="">
            <Heading color="White">School Schedule</Heading>
            <Paragraph color="white">Set your Driving Schedule Here</Paragraph>
            <Box pad="xsmall">
              <Grid
                gap="medium"
                rows="small"
                columns={{ count: "fit", size: "small" }}
              >
                {data.map((value) => (
                  <Card
                    background={"#d6ecef"}
                    onClick={() => {
                      {
                        {
                          background = "#90EE90";
                        }
                      }
                    }}
                    key={value.message}
                  >
                    <CardBody pad="small">
                      <Identifier
                        pad="small"
                        title={value.title}
                        subTitle={value.subTitle}
                        size="small"
                        align="start"
                      >
                        {value.icon}
                      </Identifier>
                    </CardBody>
                    <CardFooter
                      pad={{ horizontal: "medium", vertical: "small" }}
                    >
                      <Text size="xsmall">{value.message}</Text>
                    </CardFooter>
                  </Card>
                ))}
              </Grid>

              <Paragraph></Paragraph>
            </Box>
          </PageContent>
        </Page>
      </Grommet>
    </div>
  );
};
