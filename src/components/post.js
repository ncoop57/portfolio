import compose from 'recompose/compose';
import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Card, CardContent, Divider, Paper, Typography } from "@material-ui/core";
import ReactMarkdown from "react-markdown"
import CodeBlock from './code_block';
import "github-markdown-css"
import { Base64 } from 'js-base64';
import { fetchPost } from '../actions';

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
class Post extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;
    this.state = {post: "text"};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/posts/${id}`)
        .then((r) => r.text())
        .then(text  => {
          this.setState({
            post: text,
          });
        })
    this.props.fetchPost(id);
  }

  render() {
    // const { post } = this.state;

    const { post } = this.props
    const text = post.content != undefined ? (
      atob(post.content)
    ) : null;
    // if (post.content != undefined)
    //   console.log("Decoding", atob(post.content))

    return (
      <div className="markdown-body">
          <Card >
          <CardContent>
            <ReactMarkdown source = {text} renderers={{
              code: CodeBlock
            }}/>
          </CardContent>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.post };
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(Post);
export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchPost }),
)(Post);
