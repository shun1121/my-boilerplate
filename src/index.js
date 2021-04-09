import React from 'react';
import ReactDOM from 'react-dom';
// ↓ storeを作成するための関数createStoreをimport
import { createStore } from 'redux';
// ↓ 作成したstoreを前コンポーネントに渡す機能を持つProviderをimport
import { Provider } from 'react-redux'
import './index.css';
import reducer from './reducers'
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// アプリケーション内部の全てのstateがこのstoreに集約されている
const store = createStore(reducer)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
