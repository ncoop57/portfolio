import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from 'material-ui';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
};

const Project = (props) => {
  const { name, full_name, url, classes } = props;
  const icon_src = `https://raw.githubusercontent.com/${full_name}/master/icon.png`;
  return (
    <Card className = { classes.card }>
      <CardMedia
        className = { classes.media }
        image = { icon_src }
        onError = { (e) => { console.log("cannot find icon") } }
      />
      <CardContent>
        <Typography gutterBottom variant = "headline" component = "h2">
          { _.startCase(_.camelCase(name)) }
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant = "raised" color = "primary" href = { url }>View Repo</Button>
      </CardActions>
    </Card>
  );
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);