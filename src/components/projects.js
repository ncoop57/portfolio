import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProjects } from '../actions';

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    return (
      <div className = "projects" >
        Projects Page.
      </div>
    );
  }
}

export default connect(null, { fetchProjects })(Projects);