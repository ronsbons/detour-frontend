import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App.js';
import { store, persistor } from './configureStore.js';

import './styles/index.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  // pass in store from configureStore file
  <Provider store={store}>
    {/* [] can set a Loading component in loading */}
    {/* PersistGate delays rendering of app's UI until persisted state has been retrieved and saved to redux */}
    {/* pass in persistor from configureStore file */}
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
