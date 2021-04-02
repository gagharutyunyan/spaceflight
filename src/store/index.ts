import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer } from './init/rootReducer';
import { rootSaga } from './init/rootSaga';
import { middleware, sagaMiddleware } from './init/middleware';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
