import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import NavBar from './navbar';
import Landing from './Landing';
import Surveys from './Surveys';
import SurveyNew from './SurveyNew';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div style={{ marginTop: '100px' }}>
        <Container>
          <Router>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Surveys} />
                <Route path="/surveys/new" component={SurveyNew} />
              </Switch>
            </div>
          </Router>
        </Container>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(App);
