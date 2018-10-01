import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './root-epics';
import { rootReducers } from './root-reducers';

const epicMiddleware = createEpicMiddleware();

export const store = (() => {
  const rootStore = createStore(rootReducers, composeWithDevTools(applyMiddleware(epicMiddleware)));
  epicMiddleware.run(rootEpic);
  return rootStore;
})();
