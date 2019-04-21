import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Snackbar
} from "material-ui";
import IconButton from "material-ui/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";
import CloseIcon from "@material-ui/icons/Close";

import axios from "axios";
import qs from "qs";

const API_URL =
  "https://script.google.com/macros/s/AKfycbyCZH7bqRLdiiPfRXkIyfDjTOEhpEWFrY7WqTjikrs-VqlycA/exec";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  margin: {
    margin: theme.spacing.unit
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

class EmailDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      email: "",
      message: ""
    };
  }

  handleSnackOpen = () => {
    this.setState({ open: true });
  };

  handleSnackClose = () => {
    this.setState({ open: false });
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = {};
    data.formDataNameOrder = JSON.stringify({
      email: [this.state.email],
      message: [this.state.message],
      color: ["blue"],
      name: ["Nathan"]
    });
    data.formGoogleSheetName = "responses";
    data.formGoogleSendEmail = "";
    data = qs.stringify(data);
    axios.post(API_URL, data);

    this.setState({
      email: "",
      message: ""
    });

    this.props.onClose(); // close dialog box
    this.handleSnackOpen();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Contact Me</DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you want to contact me, please enter a return email along with
              your message below.
            </DialogContentText>
            <form
              className={classes.container}
              onSubmit={this.handleSubmit.bind(this)}
            >
              <FormControl className={classes.margin} fullWidth>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    value={this.state.email}
                    type="email"
                    id="email"
                    name="email"
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    }
                    onChange={this.handleChange.bind(this)}
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="message">Message</InputLabel>
                  <Input
                    value={this.state.message}
                    type="text"
                    id="message"
                    name="message"
                    multiline
                    rows="5"
                    startAdornment={
                      <InputAdornment position="start">
                        <MessageIcon />
                      </InputAdornment>
                    }
                    onChange={this.handleChange.bind(this)}
                  />
                </FormControl>
              </FormControl>
            </form>
            <DialogActions>
              <Button onClick={this.props.onClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit.bind(this)} color="primary">
                Send
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleSnackClose.bind(this)}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Message Sent</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleSnackClose.bind(this)}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(EmailDialog);
