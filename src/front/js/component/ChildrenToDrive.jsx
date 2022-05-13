import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Divider from "@mui/material/Divider";

const children = ["Jimmy", "Sara"];

let SimpleDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Who Needs a Ride?</DialogTitle>
      <List sx={{ pt: 0 }}>
        {children.map((child) => (
          <ListItem
            button
            onClick={() => handleListItemClick(child)}
            key={child}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={child} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addChild")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add child" />
        </ListItem>
      </List>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export const ChildrenToDrive = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(children[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button
        variant="contained"
        sx={{ bgcolor: "#224758e1" }}
        onClick={handleClickOpen}
      >
        Request Ride
      </Button>
      <Divider sx={{ marginTop: "1em" }} light />
      <List
        sx={{
          margin: "auto",
          marginTop: "2.5em",
          width: "60%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <PersonIcon sx={{ color: "blue" }} />
          </ListItemAvatar>
          <ListItemText
            primary={selectedValue}
            secondary={
              <React.Fragment>
                <Typography
                  component="div"
                  sx={{ display: "inline" }}
                  variant="body2"
                  color="text.primary"
                >
                  Miami High
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};
