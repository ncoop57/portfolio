import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import {
  Divider,
  Drawer,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home'
import BuildIcon from '@material-ui/icons/Build';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import EmailDialog from './email-dialog';

export const DRAWER_WIDTH = 240;

const styles = theme => ({
  drawerPaper: {
    width: DRAWER_WIDTH,
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
    },
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
        <div className={classes.drawerHeader}>
        </div>
        <Divider />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </Link>
        <Link to="/publications" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary="Publications" />
          </ListItem>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItem>
        </Link>
        <Link to="/email" target="_blank" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Me" />
          </ListItem>
        </Link>
        <div className={classes.drawerHeader}>
        </div>
        <Divider />
        <Typography
          className="text-center"
          variant="headline"
          component="h4"
        >
          Social Media
        </Typography>
        <Link to="/videos" target="_blank" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <YouTubeIcon />
            </ListItemIcon>
            <ListItemText primary="YouTube" />
          </ListItem>
        </Link>
        <Link to="/twitter" target="_blank" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
        </Link>
        <Link to="/github" target="_blank" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
        </Link>
        <Link to="/linkedin" target="_blank" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
        </Link>
      </div>
    );

    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={open_drawer}
            onClose={onToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open={open_drawer}
            onClose={onToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);