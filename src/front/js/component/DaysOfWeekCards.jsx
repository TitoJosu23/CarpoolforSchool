import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Calendar } from "grommet-icons";

import { Box, Card, CardBody, CardFooter, Grid, Grommet, Text } from "grommet";

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
  },
};
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
const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="xsmall" align="center" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);

export const DaysOfWeekCards = (props) => {
  const [selected, setSelected] = useState(!selected ? false : true);

  const handleClick = () => {
    !selected ? setSelected : setSelected(!selected);
  };
  return (
    <Grommet theme={theme}>
      <Box pad="small">
        <Grid
          gap="medium"
          rows="small"
          columns={{ count: "fit", size: "small" }}
        >
          {data.map((value) => (
            <Card
              background={"#d6ecef"}
              onClick={handleClick}
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
              <CardFooter pad={{ horizontal: "medium", vertical: "small" }}>
                <Text size="xsmall">{value.message}</Text>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};
