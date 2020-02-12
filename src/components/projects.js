import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { fetchProjects } from '../actions';
import Project from './project';

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return _.map(this.props.projects, project => {
      if (project.owner === undefined || project.has_pages === false) {
        return null;
      }

      return (
        <Grid item xs = {12} sm = {6} md = {6} lg = {6} key = { project.id }>
          <Project project = { project }/>
        </Grid>
      );
    }).reverse();
  }

  render() {
    return (
      <div className = "projects" >
        <Grid container direction={'row'} spacing = {24}>
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