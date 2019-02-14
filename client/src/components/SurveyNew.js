import React from 'react';
import { Header } from 'semantic-ui-react';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

class SurveyNew extends React.Component {
  state = { showReview: false };

  renderContent() {
    return this.state.showReview ? (
      <SurveyReview onCancel={() => this.setState({ showReview: false })} />
    ) : (
      <div>
        <Header>New Survey</Header>
        <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
