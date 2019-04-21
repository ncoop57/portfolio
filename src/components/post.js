import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "material-ui";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "100%"
  }
};

const Post = props => {
  const {
    post: { title, desc, link },
    classes
  } = props;

  return (
    <Card>
      {/* <CardMedia
        className={classes.media}
        image={icon_src}
        onError={e => {
          console.log("cannot find icon");
        }}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {_.startCase(_.camelCase(title))}
        </Typography>
        <Typography align="justify" component="p">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        {/* {site} */}
        <Button variant="raised" color="primary" href={link}>
          View Post on Medium
        </Button>
      </CardActions>
    </Card>
  );
};

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
