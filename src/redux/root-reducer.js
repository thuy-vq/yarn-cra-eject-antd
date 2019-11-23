import { combineReducers } from 'redux';

import appReducer from './apps/app.reducer';

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
