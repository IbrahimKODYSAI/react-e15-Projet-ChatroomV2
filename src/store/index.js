// 4. j'introduis mon store
// mon gardien du state, celui qui centralise mes données

/**
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import reducers from './reducers';
import socketMiddleware from 'src/store/socketMiddleware';
import { websocketConnect } from 'src/store/reducers/settings';

// compose, on récupère compose soit de redux devtools s'il est dispo sinon de redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// composition des enhancers
const enhancers = composeEnhancers(
  applyMiddleware(socketMiddleware),
);

/**
 * Store
 */
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  enhancers,
);
/* eslint-enable */

// je peux dispatcher une action juste après avoir créer le store
store.dispatch(websocketConnect());

/**
 * Export
 */
export default store;
