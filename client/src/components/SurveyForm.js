import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { InputField, TextAreaField } from 'react-semantic-redux-form';

const SurveyForm = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit(values => props.onSurveySubmit(values))}>
      <Field name="title" component={InputField} label="Title" placeholder="Title" />

      <Field name="subject" component={InputField} label="Subject" placeholder="Subject" />

      <Field name="body" component={TextAreaField} label="Body" placeholder="Body" />

      <Field
        name="recipients"
        component={TextAreaField}
        label="Recipient List"
        placeholder="Recipients"
      />

      <Link to="/surveys">
        <Button color="grey" size="medium" type="button">
          Cancel
        </Button>
      </Link>

      <Button primary icon labelPosition="right" size="medium" floated="right" type="submit">
        Next
        <Icon name="right arrow" />
      </Button>
    </Form>
  );
};

const extractInvalidEmails = emailList => {
  if (!emailList) return [];
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailList
    .replace(/,/, ';')
    .split(';')
    .map(email => email.trim())
    .filter(email => !emailRegex.test(email) && email.length > 0);
};

const validate = values => {
  const fields = ['title', 'subject', 'body', 'recipients'];
  const errors = {};

  const invalidEmails = extractInvalidEmails(values.recipients);
  if (values.recipients && invalidEmails.length > 0) {
    errors.recipients = `Invalid emails: ${invalidEmails.join(', ')}`;
  }

  fields.forEach(field => {
    if (!values[field]) {
      const capitalizedFieldName = field.charAt(0).toUpperCase() + field.slice(1);
      errors[field] = `${capitalizedFieldName} is a required field`;
    }
  });

  return errors;
};

const formWrapper = reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false,
})(SurveyForm);

export default connect()(formWrapper);
