import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardColumns } from 'reactstrap';

import { fetchProjects } from '../actions';
import Project from './project';

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return _.map(this.props.projects, project => {
      return (
        <Project name = { project.name } full_name = { project.full_name } url = { project.html_url } key = { project.id } />
      );
    }).reverse();
  }

  render() {
    return (
      <div className = "projects" >
        Projects:
        <CardColumns>{ this.renderProjects() }</CardColumns>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(Projects);