import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>Header</div>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <h2>Landing</h2>} />
          <Route path="/surveys" component={() => <h2>Dashboard</h2>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
