import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';

class Surveys extends React.Component {
  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <Container fluid>
        <Link to="/surveys/new">
          <Button circular icon="plus" color="blue" floated="right" size="big" />
        </Link>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(withRouter(Surveys));
