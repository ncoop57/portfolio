import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Card, CardContent, Divider, Paper, Typography } from "@material-ui/core";
import ReactMarkdown from "react-markdown"
import CodeBlock from './code_block';
import "github-markdown-css"
// const ReactMarkdown = require('react-markdown')

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
    // fetch('/blogs/2020-01-26-welcome.md')
    //     .then((r) => r.text())
    //     .then(text  => {
    //       // console.log(text);
    //       this.state = {post: "text"};
    //       // <ReactMarkdown source = {text} />
    //     })
    // this.state = {post: new Date()};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/posts/${id}`)
        .then((r) => r.text())
        .then(text  => {
          // console.log(text);
          this.setState({
            post: text,
          });
          // this.state = {post: text};
          // <ReactMarkdown source = {text} />
        })
  }

  render() {
    const { post } = this.state;

    return (
      <div className="markdown-body">
          {/* {id}: */}
          <Card >
          <CardContent>
          <ReactMarkdown source = {post} renderers={{
        code: CodeBlock
      }}/>
          </CardContent>
        </Card>
      </div>
    );
  }
}

// const Post = props => {
//   const { id } = props.match.params;
//   let input = '# This is a header\n\nAnd this is a *paragraph*'
//   fetch('/blogs/2020-01-26-welcome.md')
//         .then((r) => r.text())
//         .then(text  => {
//           console.log(text);
//           input = text
//           // <ReactMarkdown source = {text} />
//         })
//   return (
//     <div className="post">
//       <Paper elevation={1}>
//         {id}:
        
//         <ReactMarkdown source = {input} />
//       </Paper>
//     </div>
//   );
// };

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
