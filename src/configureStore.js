import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage';

// import reducer from index file
import rootReducer from './reducers/indexReducers.js';

// tells redux-persist to use localStorage
const persistConfig = {
  key: 'root',
  storage,
};

// export object "store" returned from createStore function that takes into account persistReducer and middleware
export const store = createStore(
  // tells which reducers have access to changing storage (localStorage)
  persistReducer(persistConfig, rootReducer),
  // middleware for Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export object "persistor" returned from persistStore function that takes in the above store
// ensures redux store/state is saved to persisted storage whenever it changes
export const persistor = persistStore(store);