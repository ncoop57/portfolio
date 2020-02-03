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
      return (
        <Grid item xs = {12} sm = {6} md = {4} lg = {4} key = { project.id }>
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