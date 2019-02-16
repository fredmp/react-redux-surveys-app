import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Container, Button, Table, Divider, Header } from 'semantic-ui-react';

import { fetchSurveys } from '../actions';

class Surveys extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      this.props.history.push('/');
    }
  }

  renderList() {
    if (!this.props.surveys) return null;
    return this.props.surveys.map((survey, index) => {
      const language = navigator.languages
        ? navigator.languages[0]
        : navigator.language || navigator.userLanguage;
      const sentAt = survey.sentAt ? new Date(survey.sentAt).toLocaleString(language) : '';
      return (
        <Table.Row key={index}>
          <Table.Cell>{survey.title}</Table.Cell>
          <Table.Cell>{survey.subject}</Table.Cell>
          <Table.Cell>{survey.body}</Table.Cell>
          <Table.Cell>{survey.yes}</Table.Cell>
          <Table.Cell>{survey.no}</Table.Cell>
          <Table.Cell>{sentAt}</Table.Cell>
        </Table.Row>
      );
    });
  }

  render() {
    return (
      <Container fluid>
        <Header>Surveys</Header>
        <Link to="/surveys/new">
          <Button circular icon="plus" color="blue" size="big" />
        </Link>
        <Divider hidden />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Subject</Table.HeaderCell>
              <Table.HeaderCell>Body</Table.HeaderCell>
              <Table.HeaderCell>Yes</Table.HeaderCell>
              <Table.HeaderCell>No</Table.HeaderCell>
              <Table.HeaderCell>Sent on</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderList()}</Table.Body>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, surveys: state.surveys };
};

const mapDispatchToProps = {
  fetchSurveys,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Surveys));
