import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
import { withStyles } from "material-ui/styles";
import { CardMedia, Divider, Grid, Paper, Typography } from "material-ui";
import Publication from "./publication";

import { fetchPublications } from '../actions';
import { ALL_PUBLICATIONS } from '../store/all_publications'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Publications extends Component {
  renderPublications() {
    console.log(ALL_PUBLICATIONS)
    return _.map(ALL_PUBLICATIONS, publication => {
      return (
        <Grid item xs={12} sm={12} md={12} lg={12} key = { publication.id }>
          <Publication publication = { publication }/>
        </Grid>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="home">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.root} elevation={1}>
              <Typography
                className="text-center"
                variant="headline"
                component="h3"
              >
                My Publications
              </Typography>
            </Paper>
          </Grid>
          { this.renderPublications() }
        </Grid>
      </div>
    );
  }
}

Publications.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Publications);
