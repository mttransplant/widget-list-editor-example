import React from 'react'
import ReactDOM from 'react-dom'
import Widget from "./components/Widget";
import WidgetList from "./components/WidgetList";
import App from "./App";

ReactDOM.render(
    // <Widget widget={{text: "Hello"}}/>,
    // <WidgetList widgets={[{text: "heading"},{text: "list"}]}/>,
    <App/>,
    document.getElementById('root')
)