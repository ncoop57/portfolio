import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  Divider,
  Drawer,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui';
import HomeIcon from '@material-ui/icons/Home'
import BuildIcon from '@material-ui/icons/Build';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonIcon from '@material-ui/icons/Person';

import EmailDialog from './email-dialog';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
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
    const { classes, onToggle, open_drawer } = this.props;

    const drawer = (
      <div>
        <div className = { classes.drawerHeader }>
        </div>
        <Divider />
        <Link to = "/" style = {{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary = "Home" />
          </ListItem>
        </Link>
        <Link to = "/projects" style = {{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary = "Projects" />
          </ListItem>
        </Link>
        <Link to = "/about" style = {{ textDecoration: 'none' }}>
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
      </div>
    );

    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant = "temporary"
            anchor = "left"
            open = { open_drawer }
            onClose = { onToggle }
            classes = {{
              paper: classes.drawerPaper,
            }}
          >
            { drawer }
          </Drawer>
        </Hidden>
        <Hidden smDown implementation = "css">
          <Drawer
            variant = "permanent"
            open = { open_drawer }
            onClose = { onToggle }
            classes = { {
              paper: classes.drawerPaper,
            } }
          >
            { drawer }
          </Drawer>
        </Hidden>
        <EmailDialog open = { this.state.open } onClose = { this.handleClose.bind(this) } />
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);