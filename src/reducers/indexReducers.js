import { combineReducers } from 'redux';
import location from './locationReducer.js';
import user from './userReducer.js';

const rootReducer = combineReducers({
  location,
  user
});

export default rootReducer