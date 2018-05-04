import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import purple from 'material-ui/colors/purple';
import CssBaseline from 'material-ui/CssBaseline';
import { withStyles } from 'material-ui/styles';

import NavDrawer from './nav-drawer';
import NavBar from './nav-bar';
import Projects from './projects';
import About from './about';
import Home from './home';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    type: 'dark',
  },
});

const drawerWidth = 240;

const styles = theme => ({
  appFrame: {
    flexGrow: 1,
    // height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 8,
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open_drawer: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState({ open_drawer: !this.state.open_drawer });
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme = { theme }>
        <CssBaseline />
        <HashRouter>
          <div className = { classes.appFrame }>
            <NavBar open = { this.state.open_drawer } onOpen = { this.handleDrawerToggle }/>
            <NavDrawer
              onToggle = { this.handleDrawerToggle }
              open_drawer = { this.state.open_drawer }
            />
            <main
              className = { classes.content }
            >
              <div className = "container">
                <Switch>
                    <Route path = "/projects" component = { Projects } />
                    <Route path = "/about" component = { About } />
                    <Route path = "/" component = { Home } />
                </Switch>
              </div>
            </main>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);