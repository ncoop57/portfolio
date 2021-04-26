import _ from 'lodash';
import compose from 'recompose/compose';
import React, { Component } from "react";
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles";
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";
import Video from './video';
import { fetchVideos } from '../actions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  }
});

class Videos extends Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  renderVideos() {
    return _.map(this.props.videos.items, video => {
      if (video.id.videoId) {
        return (
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Video video={video} />
          </Grid>
        );
      }
    });
  }

  render() {
    return (
      <div className="home">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card elevation={1}>
              <CardContent>
                <Typography
                  className="text-center"
                  variant="headline"
                  component="h3"
                >
                  My Videos
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {this.renderVideos()}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videos };
}

Videos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchVideos }),
)(Videos);