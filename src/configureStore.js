import { createStore } from 'redux';
// import reducer from index file
import rootReducer from './reducers/indexReducers.js';

function configureStore() {
  const store = createStore(
    rootReducer,
    // middleware for Redux Devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

export default configureStore