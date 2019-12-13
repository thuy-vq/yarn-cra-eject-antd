import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import history from './history';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        routerMiddleware(history),
        ...middlewares)
    ),
);

sagaMiddleware.run(rootSaga);

export default store;
