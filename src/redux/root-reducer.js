import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from './apps/app.reducer';
import languageProviderReducer from './LanguageProvider/language-reducer';
import history from './history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  language: languageProviderReducer,
  app: appReducer,
});

export default rootReducer;