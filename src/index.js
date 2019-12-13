import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import LocaleProvider from './utils/providers/LocaleProvider';

import history from './redux/history';
import Routes from './routes/Routes';

import 'sanitize.css';

// import 'sanitize.css/typography.css';
// import 'sanitize.css/forms.css';

ReactDOM.render(
  <Provider store={configureStore}>
    <LocaleProvider>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
