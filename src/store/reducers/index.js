import { combineReducers } from 'redux';

import messages from './messages';
import form from './form';
import settings from './settings';

const reducers = combineReducers({
  messages,
  form,
  settings,
});

export default reducers;
