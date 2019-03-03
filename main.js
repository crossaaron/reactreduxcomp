import React, { Component } from 'react'
import ReactDOM from  'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './Components/App'
import './style.css'

const counterReducer = (state=0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        default: return state
    }
};

const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));