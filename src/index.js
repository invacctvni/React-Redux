import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import {Provider} from "react-redux";

import {applyMiddleware, createStore} from "redux";

import reducers from "./reducers";

import thunk from 'redux-thunk';

import {BrowserRouter} from "react-router-dom";

const reduxStore =createStore(
    reducers,
    //define async action creators
    // https://github.com/reduxjs/redux-thunk
    applyMiddleware(thunk)
)
ReactDOM.render(
    <Provider store={reduxStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
