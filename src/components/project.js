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

const Project = props => {
  const {
    project: { name, full_name, html_url, owner, description },
    classes
  } = props;
  
  const icon_src = `https://raw.githubusercontent.com/${full_name}/website/icon.png`;
  const pages_url = `https://${owner.login}.github.io/${name}`;
  const site = (
    <Button variant="contained" color="secondary" href={pages_url}>
      View Site
    </Button>
  )

  return (
    <Card className={classes.card} fullWidth>
      <CardMedia
        className={classes.media}
        image={icon_src}
        onError={e => {
          console.log("cannot find icon");
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h4">
          {_.startCase(_.camelCase(name))}
          <Divider />
        </Typography>
        <Typography gutterBottom variant="caption" >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {site}
        <Button variant="contained" color="primary" href={html_url}>
          View Repo
        </Button>
      </CardActions>
    </Card>
  );
};

Project.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);
