import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import purple from 'material-ui/colors/purple';
import CssBaseline from 'material-ui/CssBaseline';

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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme = { theme }>
        <CssBaseline />
        <HashRouter>
          <div>
            <Switch>
              <Route path = "/projects" component = { Projects } />
              <Route path = "/about" component = { About } />
              <Route path = "/" component = { Home } />
            </Switch>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
