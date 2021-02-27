import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';

const defaultState = {
    cash: 0,
}

// Reducer is a pure function? no side effects in it!
// Use middleware for side effects
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload};
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload};
        default:
            return state;
    }
}

// Takes 2 parameters: reducer and applyMiddleware(thunk)
const store = createStore(reducer);

// store.dispatch({type: "ADD_CASH", payload: 10})
// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
