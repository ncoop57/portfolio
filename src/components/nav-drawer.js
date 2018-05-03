import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui';
import HomeIcon from '@material-ui/icons/Home'
import BuildIcon from '@material-ui/icons/Build';
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import EmailDialog from './email-dialog';

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
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
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
        <EmailDialog open = { this.state.open } onClose = { this.handleClose.bind(this) } />
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);