import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
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

const Publication = props => {
  const {
    publication: { title, authors, conf, link }
  } = props;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h6">
          {title}
        </Typography>
        <Divider />
        <br />
        <Typography align="justify" component="p">
          Authors: {authors}
        </Typography>
        <Typography align="justify" component="p">
          {conf}
        </Typography>
      </CardContent>
      <CardActions>
        {/* {site} */}
        <Button variant="contained" color="primary" href={link}>
          View Paper
        </Button>
      </CardActions>
    </Card>
  );
};

Publication.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Publication);
