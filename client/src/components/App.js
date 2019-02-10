import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { navBarLeftItems, navBarRightItems } from './uiHelpers';
import NavBar from './NavBar';

const App = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <Container>
        <Router>
          <div>
            <NavBar leftItems={navBarLeftItems} rightItems={navBarRightItems} />
            <Switch>
              <Route exact path="/" component={() => <h2>Landing</h2>} />
              <Route path="/surveys" component={() => <h2>Dashboard</h2>} />
            </Switch>
          </div>
        </Router>
      </Container>
    </div>
  );
};

export default App;
