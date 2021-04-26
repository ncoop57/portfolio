import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Switch } from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import purple from "@material-ui/core/colors/purple";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavDrawer, { DRAWER_WIDTH } from "./nav-drawer";
import NavBar from "./nav-bar";
import Projects from "./projects";
import About from "./about";
import Home from "./home";
import Post from "./post";
import Publications from "./publications";
import Videos from "./videos";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    },
    secondary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700]
    },
    type: "dark"
  }
});

const styles = theme => ({
  root: {
    // flexGrow: 1,
    // zIndex: 1,
    // overflow: "hidden",
    // position: "relative",
    // display: "flex",
    // width: "100%"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.dark,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      marginLeft: DRAWER_WIDTH
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open_drawer: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({ open_drawer: !this.state.open_drawer });
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <div className={classes.root}>
            <NavBar onToggle={this.handleDrawerToggle} />
            <NavDrawer
              onToggle={this.handleDrawerToggle}
              open_drawer={this.state.open_drawer}
            />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route path="/publications" component={Publications} />
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/posts/:id" component={Post} />
                <Route path="/" component={Home} />
              </Switch>
            </main>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
