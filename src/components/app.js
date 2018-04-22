import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Projects from './projects';
import About from './about';
import Home from './home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route path = "/projects" component = { Projects } />
            <Route path = "/about" component = { About } />
            <Route path = "/" component = { Home } />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
