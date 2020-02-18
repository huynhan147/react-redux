import React from 'react';
import ReactDOM from 'react-dom';
import Click from "./components/Click";
import UserContainer from "./container/User";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getEleme   ntById('root'));
// ReactDOM.render(<Click />, document.getElementById('root'));
ReactDOM.render(<UserContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
