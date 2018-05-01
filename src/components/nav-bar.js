import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar } from 'material-ui';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className = { classes.root }>
        <AppBar position = "static">
          <Toolbar>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);