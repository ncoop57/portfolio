import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography
} from "material-ui";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  resume: {
    // width: "100%",
    // height: 600
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 512,
    height: 512
  }
});

const About = props => {
  const { classes } = props;

  return (
    <div className="about">
      <Paper className={classes.root} elevation={1}>
        <CardMedia
          className="text-center"
          onError={e => {
            console.log("What", e);
          }}
        >
          <img src="./images/profile.jpg" alt="Nathan Cooper" width="75%" />
        </CardMedia>
        <Typography variant="headline" component="h3">
          I'm a nerd.
        </Typography>
        <Typography component="p">
          Hi there, my name is Nathan Cooper. I am currently a PhD student at
          the College of William and Mary, studying Software Engineering. I
          always loved playing video games with friends and on my own, so, when
          I learned I could make them myself through programming a computer to
          do it, I fell in love with programming. I wrote my first program with
          I was 12 years old, it was a program to mod a game I was addicted to
          at the time called Roblox. From there I went on to mod other games,
          like MineCraft, and "attempt" to make my own. I eventually decided to
          make this passion of mine a career, so, I went for a Bachelor's degree
          in Software Engineering from the University of West Florida. Though, I
          switched my career path from games to now education, I still love
          playing video games with friends to pass the time. As a hobby I work
          on personal projects, of which you can find a list of, hopefully
          mostly complete, ones on my projects page. Below you will find my
          resume. If you have any questions or just want to say hi, feel free to
          use my fully custom made Contact system which you can access using the
          sidebar!
        </Typography>

        <br />

        <iframe
          src="http://docs.google.com/gview?url=https://nathancooper.io/files/resume.pdf&embedded=true"
          style={{ width: "100%", height: 512 }}
          frameborder="0"
        />
      </Paper>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
