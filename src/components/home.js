import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "material-ui";

import { fetchStories } from "../actions";

class Home extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  renderStories() {
    console.log(this.props.stories);
    return "Hi";
    // return _.map(this.props.projects, project => {
    //   return (
    //     <Grid item xs={12} sm={6} md={4} lg={4} key={project.id}>
    //       <Project project={project} />
    //     </Grid>
    //   );
    // }).reverse();
  }

  render() {
    return (
      <div className="home">
        Projects:
        <Grid container spacing={24}>
          {this.renderStories()}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stories: state.stories };
}

export default connect(
  mapStateToProps,
  { fetchStories }
)(Home);
