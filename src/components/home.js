import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { CardMedia, Divider, Grid, Paper, Typography } from "material-ui";
import Post from "./post";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    const post = {
      title: "Personal Website Done My Way",
      desc:
        "I’ve always enjoyed web development, frontend and backend. Just the idea of having something you have put your blood sweat and tears into being available on the internet intrigued me. It has always been a hobby for me with no real world experience, so, of course I decided to build my own website from scratch, because why not?",
      link:
        "https://medium.com/@nathanallencooper/personal-website-done-my-way-21d669081565"
    };

    return (
      <div className="home">
        {/* <Paper className={classes.root} elevation={1}>
          <Typography className="text-center" variant="headline" component="h3">
            Welcome to my website!
          </Typography>
          <Divider />
          <br />
          <Typography align="justify" component="p">
            On this page you find my ramblings, occasional tutorials, and
            project updates in blog form below. You can use the left
            navigational panel to find my projects, read my bio, or even contact
            me through my custom email dialog box.
          </Typography>

          <br />

          <Typography className="text-center" component="p">
            Blogs coming soon!
          </Typography>
        </Paper> */}
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.root} elevation={1}>
              <Typography
                className="text-center"
                variant="headline"
                component="h3"
              >
                Welcome to my website!
              </Typography>
              <Divider />
              <br />
              <Typography align="justify" component="p">
                On this page you find my ramblings, occasional tutorials, and
                project updates in blog form below. You can use the left
                navigational panel to find my projects, read my bio, or even
                contact me through my custom email dialog box.
              </Typography>

              <br />

              <Typography className="text-center" component="p">
                More blog posts coming soon!
              </Typography>
            </Paper>
            {/* <Project project={project} /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Post post={post} />
            {/* <Project project={project} /> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
