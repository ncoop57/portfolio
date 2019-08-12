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
    const publication = {
      title: "A pilot study on introducing continuous integration and delivery into undergraduate software engineering courses",
      authors: "Brian P Eddy, Norman Wilde, Nathan A Cooper, Bhavyansh Mishra, Valeria S Gamboa, Keenal M Shah, Adrian M Deleon, Nikolai A Shields",
      conf: "2017 IEEE 30th Conference on Software Engineering Education and Training (CSEE&T)",
      link: "https://ieeexplore.ieee.org/abstract/document/8166682"
    };

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
              <Divider />
              <br />

              <Typography className="text-center" component="p">
                More blog posts coming soon!
              </Typography>
            </Paper>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12} lg={12}> */}
            {/* <Publication publication={publication} /> */}
            { this.renderPublications() }
          {/* </Grid> */}
        </Grid>
      </div>
    );
  }
}

Publications.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Publications);
