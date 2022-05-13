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
<<<<<<< HEAD
          <PageContent background="light-3">
            <Heading>School Schedule</Heading>
            <Paragraph>Set your Driving Schedule Here</Paragraph>
            <Box>
              <Accordion>
                <AccordionPanel label="Village Green Elementary">
                  <Box background="light-2" overflow="auto" height="auto">
                    <Box height="large" flex={false}>
                      <Box fill align="center" justify="center">
                        <Box marginTop="50px" height="large" width="medium">
                          <Form>
                            <FormField label="Seats available" name="size">
                              <Select
                                name="Seats"
                                options={["1", "2", "3", "4", "5"]}
                              />
                            </FormField>
                            <FormField label="Time of Day" name="size">
                              <Select
                                name="M/A"
                                multiple
                                options={["Morning", "Afternoon"]}
                              />
                            </FormField>
                          </Form>
                        </Box>
                      </Box>
=======
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
>>>>>>> 87e3d0caa904ea5cda5e976dc44b505b0806f731

                      <div style={{ marginTop: "200px" }}>
                        <DaysOfWeekCards />
                      </div>
                    </Box>
                    <div
                      className="scheduleButtonGroup"
                      style={{ marginTop: "80px", marginBottom: "5px" }}
                    >
                      <Box direction="row" justify="evenly" overflow="auto">
                        <Button type="reset" label="Edit" />
                        <Button type="submit" label="Update" primary />
                      </Box>
                    </div>
                  </Box>
                </AccordionPanel>
                <AccordionPanel label="Doolin Middle School">
                  <Box background="light-2" overflow="auto" height="medium">
                    <Box height="large" flex={false}>
                      <Box fill align="center" justify="center">
                        <Box width="medium">
                          <Form className="">
                            <FormField label="Seats available" name="size">
                              <Select
                                name="Seats"
                                multiple
                                options={["1", "2", "3", "4", "5"]}
                              />
                            </FormField>
                            <FormField label="Time of Day" name="size">
                              <Select
                                name="M/A"
                                multiple
                                options={["Morning", "Afternoon"]}
                              />
                            </FormField>
                          </Form>
                        </Box>
                      </Box>
                      <div style={{ marginTop: "200px" }}>
                        <DaysOfWeekCards />
                      </div>
                    </Box>
                    <div
                      className="scheduleButtonGroup"
                      style={{ marginTop: "80px", marginBottom: "5px" }}
                    >
                      <Box direction="row" justify="evenly" overflow="auto">
                        <Button type="reset" label="Edit" />
                        <Button type="submit" label="Update" primary />
                      </Box>
                    </div>
                  </Box>
                </AccordionPanel>
                <AccordionPanel label="Varela Sr High">
                  <Box background="light-2" overflow="auto" height="medium">
                    <Box height="large" flex={false}>
                      <Box fill align="center" justify="center">
                        <Box width="medium">
                          <Form>
                            <FormField label="Seats available" name="size">
                              <Select
                                name="Seats"
                                multiple
                                options={["1", "2", "3", "4", "5"]}
                              />
                            </FormField>
                            <FormField label="Time of Day" name="size">
                              <Select
                                name="M/A"
                                multiple
                                options={["Morning", "Afternoon"]}
                              />
                            </FormField>
                          </Form>
                        </Box>
                      </Box>
                      <div style={{ marginTop: "200px" }}>
                        <DaysOfWeekCards />
                      </div>
                    </Box>
                    <div
                      className="scheduleButtonGroup"
                      style={{ marginTop: "80px", marginBottom: "5px" }}
                    >
                      <Box direction="row" justify="evenly" overflow="auto">
                        <Button type="reset" label="Edit" />
                        <Button type="submit" label="Update" primary />
                      </Box>
                    </div>
                  </Box>
                </AccordionPanel>
              </Accordion>
            </Box>
          </PageContent>
        </Page>
      </Grommet>
    </div>
  );
};
