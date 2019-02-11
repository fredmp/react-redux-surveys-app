import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Surveys extends React.Component {
  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return <h2>Surveys</h2>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(withRouter(Surveys));
