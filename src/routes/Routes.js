import React from 'react';
import Apps from '../pages/Apps/Apps';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import SagasExample from '../components/sagas-example/SagasExample';

const Forum = () => 'this is Forums page'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Apps} />
        <Route path="/forums" component={Forum} />
        <Route path="/sagas" component={SagasExample} />
      </Switch>
    </Router>

  );
}

export default Routes;
