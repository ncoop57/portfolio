import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const styles = {
  card: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "56.25%"
  },
  media: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
};

const Video = props => {
  const {
    video,
    classes
  } = props;

  let video_id = video.id.videoId
  let video_url = `https://www.youtube.com/embed/${video_id}`
  return (
    <Card>
      <Card className={classes.card} fullWidth>
        <CardMedia
          className={classes.media}
          component="iframe"
          image={video_url}
          frameBorder="0"
        />
      </Card>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="headline" component="h4">
          {video.snippet.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

Video.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Video);
