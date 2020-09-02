import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';




const middlewareLog = store => next => action => {

   // const dragon = store.getState().dragonReducer;
    console.log("dispatching",action)
    const returnAction = next(action)
console.log("return action", returnAction)
    console.log("next state", store.getState())
}

const store = createStore(reducer, applyMiddleware(middlewareLog));

ReactDOM.render(
  <React.StrictMode>
<Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
