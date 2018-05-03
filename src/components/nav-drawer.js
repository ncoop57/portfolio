import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  DialogTitle
} from 'material-ui';
import HomeIcon from '@material-ui/icons/Home'
import BuildIcon from '@material-ui/icons/Build';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import axios from 'axios';
import qs from 'qs';

const API_URL = "https://script.google.com/macros/s/AKfycbyCZH7bqRLdiiPfRXkIyfDjTOEhpEWFrY7WqTjikrs-VqlycA/exec";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
  },
});

class NavDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      email: '',
      message: ''
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = {};
    data.formDataNameOrder = JSON.stringify({email: [this.state.email], message: [this.state.message], color: ['blue'], name: ['Nathan']});
    data.formGoogleSheetName = "responses";
    data.formGoogleSendEmail = "";
    data = qs.stringify(data);
    axios.post(API_URL, data);

    this.handleClose(); // close dialog box
  }

  render() {
    const { classes } = this.props;

    return (
      <div className = { classes.root }>
        <Drawer
          variant = "permanent"
          classes = {{
            paper: classes.drawerPaper,
          }}
        >
          <Link to = "/" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary = "Home" />
            </ListItem>
          </Link>
          <Link to = "/projects" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary = "Projects" />
            </ListItem>
          </Link>
          <Link to = "/about" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary = "About Me" />
            </ListItem>
          </Link>
          <ListItem button onClick = { this.handleOpen }>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary = "Contact" />
          </ListItem>
        </Drawer>
        <Dialog
          open = { this.state.open }
          onClose = { this.handleClose }
          aria-labelledby = 'form-dialog-title'
        >
          <DialogTitle id = "form-dialog-title">Contact Me</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To contact me, please enter a return email, your message and press send.
            </DialogContentText>
            <form method = "POST" onSubmit = { this.handleSubmit.bind(this) }>
              Email: <input value = { this.state.email } onChange = { this.handleChange.bind(this) } type = "text" id = "email" name = "email" required />
              Message: <input value = { this.state.message } onChange = { this.handleChange.bind(this) } type = "text" id = "message" name = "message" required />
              <input type="submit" value="Submit" />
            </form>
            <DialogActions>
            <Button onClick = { this.handleClose } color="secondary">
              Cancel
            </Button>
            <Button onClick={ this.handleClose } color="primary">
              Send
            </Button>
          </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);