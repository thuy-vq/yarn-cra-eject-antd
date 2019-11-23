import { combineReducers } from 'redux';

import appReducer from './apps/app.reducer';
import languageProviderReducer from './LanguageProvider/language-reducer';

const rootReducer = combineReducers({
  language: languageProviderReducer,
  app: appReducer,
});

export default rootReducer;
