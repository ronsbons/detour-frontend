import { combineReducers } from 'redux';
import location from './locationReducer.js';

const rootReducer = combineReducers({
  location
});

export default rootReducer