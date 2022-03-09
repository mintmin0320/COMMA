import 'bootstrap/dist/css/bootstrap.min.css'; //제거x 지우면 css 깨집니다!

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';

import reducers from './redux/reducers';
import App from './App';

const browserHistory = createBrowserHistory();
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </Provider>,
  document.getElementById('root'),
);
