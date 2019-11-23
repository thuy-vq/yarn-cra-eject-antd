import React from 'react';
import { connect } from 'react-redux';

import { Card, Button } from 'antd';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

const IntlExample = ({ increment, decrement, value }) => (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>
        <FormattedHTMLMessage id="app.text"
          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
          description="Welcome header on app main page"
          values={{ what: 'react-intl' }}
        />
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <FormattedMessage
          id="app.learn-react-link"
          defaultMessage="Learn React"
          description="Link on react page"
        />
      </a>
    </Card>
);

const mapStateToProps = state => ({
  value: state.app.value
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IntlExample);
