import _ from 'lodash';
import compose from 'recompose/compose';
import React, { Component } from "react";
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles";
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
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

  renderPosts() {
    console.log(this.props.videos)
    return _.map(this.props.videos.items, video => {
      console.log(video)
      let video_id = video.id.videoId
      let thumb_url = video.snippet.thumbnails.high.url
      console.log(thumb_url)
      return (
        <Grid item xs={12} sm={12} md={12} lg={12} key={video.snippet.title}>
          <Card>
            <CardMedia
              className={this.props.classes.media}
              image={thumb_url}
            />
            <CardContent>
              <iframe
                src={`http://www.youtube.com/embed/${video_id}`}
                frameBorder="0" allowFullScreen className="video"></iframe>
              <Typography gutterBottom variant="headline" component="h4">
                {video.snippet.title}
                <Divider />
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" href={`http://www.youtube.com/watch?v=${video_id}`}>
                View Video
                </Button>
            </CardActions>
          </Card>
        </Grid >
      );
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
          {this.renderPosts()}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return { videos: state.videos };
}

Videos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchVideos }),
)(Videos);