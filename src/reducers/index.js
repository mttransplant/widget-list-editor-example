import React, {Component} from 'react'
import {combineReducers} from 'redux'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from "../App";

const widgets = (state = [], action) => {
    switch (action.type) {
        case "ADD_WIDGET":
            return [
                ...state,
                {
                    id: state.widgets.length+1,
                    text: action.text
                }
            ]
        default:
            return state
    }
}

const rootReducer = combineReducers({widgets})
const store = createStore(rootReducer)
export default class WidgetsComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}