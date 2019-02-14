import React from 'react';
import { Button, Header, Icon, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitSurvey } from '../actions/index';

const SurveyReview = ({ survey, submitSurvey, onCancel, history }) => {
  return (
    <div>
      <Header>Survey Review</Header>
      <Header sub color="grey">
        Please confirm your entries
      </Header>
      <Header as="h4">Campaign Title</Header>
      <p>{survey.title}</p>
      <Header as="h4">Subject Line</Header>
      <p>{survey.subject}</p>
      <Header as="h4">Email Body</Header>
      <p>{survey.body}</p>
      <Header as="h4">List of Recipients</Header>
      <p>{survey.recipients}</p>
      <Divider hidden />
      <Button icon labelPosition="left" color="grey" size="medium" type="button" onClick={onCancel}>
        <Icon name="left arrow" />
        Back
      </Button>
      <Button
        primary
        icon
        size="medium"
        floated="right"
        type="button"
        labelPosition="right"
        onClick={() => {
          submitSurvey(survey, history);
        }}
      >
        Send Survey
        <Icon name="mail" />
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return { survey: state.form.surveyForm.values };
};

const mapDispatchToProps = {
  submitSurvey,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SurveyReview));
