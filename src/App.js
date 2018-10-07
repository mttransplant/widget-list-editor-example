import React from 'react'
import WidgetList from "./components/WidgetList";
import AddWidget from "./containers/WidgetForm";

const App = () => (
    <div>
        <WidgetList widgets={[{text: "heading"},{text: "list"}]}/>
        <AddWidget/>
    </div>
)
export default App