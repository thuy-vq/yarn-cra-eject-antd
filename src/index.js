import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import LocaleProvider from './utils/providers/LocaleProvider';

import Routes from './routes/Routes';

import 'sanitize.css';

// import 'sanitize.css/typography.css';
// import 'sanitize.css/forms.css';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider>
      <Routes />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
