import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { CardMedia, Divider, Paper, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
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
          <img src="./images/profile.jpg" alt="Nathan Cooper" width="50%" />
        </CardMedia>
        <Typography className="text-center" variant="headline" component="h3">
          I'm a nerd.
        </Typography>
        <Divider />
        <br />
        <Typography align="justify" component="p">
          Hi there, my name is Nathan Cooper. I am currently a Ph.D. student at
          the College of William and Mary, studying Software Engineering, under the mentorship of <a href="http://www.cs.wm.edu/~denys/">Denys Poshyvanyk</a>. I
          always loved playing video games with friends and on my own, so, when
          I learned I could make them myself through programming a computer to
          do it, I fell in love with programming. I wrote my first program when
          I was 12 years old, it was a program to mod a game I was addicted to
          at the time called Roblox. From there I went on to mod other games,
          like MineCraft, and "attempt" to make my own. I eventually decided to
          make this passion of mine a career, so, I went for a Bachelor's degree
          in Software Engineering from the University of West Florida and
          graduated from there in Spring of 2018. Though, I switched my career
          path from games to now using Deep Learning to solve Software
          Engineering problems, I still love playing video games with friends to
          pass the time. As a hobby, I work on personal projects which you can
          find a list of, hopefully mostly complete, ones on my Projects page.
          Below you will find my resume if you are curious in any of my other
          experiences or accomplishments. If you have any questions or just want
          to say hi, feel free to connect via email at <a href="mailto:nacooper01@email.wm.edu">nacooper01@email.wm.edu</a>,
          Twitter <a href="https://twitter.com/ncooper57">@ncooper57</a>, or <a href="https://www.linkedin.com/in/nathan-cooper-820292106/">LinkedIn</a>!
        </Typography>

        <br />

        <iframe
          src="https://docs.google.com/gview?url=https://nathancooper.io/files/resume.pdf&embedded=true"
          style={{ width: "100%", height: 512 }}
          frameborder="0"
          title="resume"
        />
      </Paper>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
