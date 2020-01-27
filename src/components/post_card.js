import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "100%"
  }
};

const PostCard = props => {
  const {
    post: { title, desc, link },
    classes
  } = props;

  return (
    <Card>
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
        <Button variant="contained" color="primary" href={link}>
          View Post on Medium
        </Button>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostCard);
