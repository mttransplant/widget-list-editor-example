import React from 'react'
import ReactDOM from 'react-dom'
import Widget from "./components/Widget";

ReactDOM.render(
    <Widget widget={{text: "Hello"}}/>,
    document.getElementById('root')
)