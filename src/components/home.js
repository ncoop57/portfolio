import _ from 'lodash';
import compose from 'recompose/compose';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/styles";
import { connect } from 'react-redux';
import { 
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography } from "@material-ui/core";
import { fetchPosts } from '../actions';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  renderPosts() {
    return _.map(this.props.posts, post => {
      let name = post.name.split('-')
      name = name.splice(3).join(' ')
      name = name.split('.')[0]

      return (
        <Grid item xs = {12} sm = {12} md = {12} lg = {12} key = { post.name }>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {_.startCase(name)}
                <Divider />
              </Typography>
            </CardContent>
            <CardActions>
              <Link to = {`/posts/${post.name}`}>
                <Button variant="contained" color="primary">
                  View Post
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      );
    }).reverse();
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
                  More blog posts coming soon
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          { this.renderPosts() }
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchPosts }),
)(Home);