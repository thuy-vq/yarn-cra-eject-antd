import React from 'react';
import Apps from '../pages/Apps/Apps';
import { Router } from '@reach/router';

const Forum = () => 'this is Forums page'

const Routes = () => {
  return (
    <>
      <Router primary={false}>
        <Apps path="/*" />
        <Forum path="/forms" />
      </Router>
    </>
  );
}

export default Routes;
