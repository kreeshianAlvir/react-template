import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import ROOT_REDUCERS from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

// redux dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  ROOT_REDUCERS,
  composeEnhancer(applyMiddleware(thunk))
);

// window.__REDUX_DEVTOOLS_EXTENSION__&& WINDOW.__REDUX_DEVTOOLS_EXTENSION__()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
