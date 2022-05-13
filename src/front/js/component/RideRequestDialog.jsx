import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import GirlIcon from "@mui/icons-material/Girl";
import { Link, useParams, useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#80d8ff",
    },
    secondary: {
      main: "#80d8ff",
    },
    background: {
      paper: "#224758e1",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto",
    },
  },
});

export const RideRequestDialog = () => {
  const [open, setOpen] = useState(false);
  const [spacing, setSpacing] = useState(2);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Dialog open fullWidth maxWidth="sm" color="#000000">
          <DialogTitle>Carpool Request</DialogTitle>
          <DialogContent>
            <DialogContentText color="#ffffff">
              Who needs a ride?
            </DialogContentText>
            <br />

            <Grid sx={{ flexGrow: 2 }} container spacing={2}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                  {[0, 1, 2].map((value) => (
                    <Grid key={value} item>
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            sx={{
                              height: 240,
                              width: 225,
                              backgroundColor: "#d6ecef",
                              margin: "auto",
                            }}
                            image="https://us.123rf.com/450wm/topvectors/topvectors1809/topvectors180901420/109793842-boy-playing-ball-in-front-of-moving-car-kid-in-dangerous-situation-vector-illustration-isolated-on-a.jpg?ver=6"
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h3"
                              component="div"
                            >
                              Zendaya Coleman
                            </Typography>
                            <Typography variant="h6" color="#ffffff">
                              Third Grade
                            </Typography>
                            <Typography variant="h6" color="#ffffff">
                              Village Green Elementary
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Link to={"/home"}>
              <Button>Cancel</Button>
            </Link>
            <Button onClick={handleClose}>Request Carpool</Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};
