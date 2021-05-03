import React from 'react';
import ReactDOM from 'react-dom';
// ↓ storeを作成するための関数createStoreをimport
import { createStore, applyMiddleware } from 'redux';
// ↓ 作成したstoreを前コンポーネントに渡す機能を持つProviderをimport
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

// development環境下ではデバッグできるようにする。
const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)

// アプリケーション内部の全てのstateがこのstoreに集約されている
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventsNew} />
        <Route path="/events/:id" component={EventsShow} />
        <Route path="/" component={EventsIndex} />
        <Route path="/events" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your EventsIndex, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
