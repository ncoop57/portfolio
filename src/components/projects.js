import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';

import { fetchProjects } from '../actions';
import Project from './project';

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return _.map(this.props.projects, project => {
      return (
        <Grid item xs = {12} sm = {6} md = {4} lg = {4}>
          <Project name = { project.name } full_name = { project.full_name } url = { project.html_url } key = { project.id } />
        </Grid>
      );
    }).reverse();
  }

  render() {
    return (
      <div className = "projects" >
        Projects:
        <Grid container spacing = {24}>
          { this.renderProjects() }
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(Projects);