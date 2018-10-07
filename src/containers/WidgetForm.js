import React from 'react'
import {connect} from 'react-redux'

let nextWidgetId = 0
const AddWidgetComponent = ({dispatch}) => {
    let input
    return(
        <div>
            <input ref={node => input = node} />
            <button type="submit" onClick={e => {
                dispatch({type: "ADD_WIDGET",
                id: nextWidgetId++,
                text: input.value})}}>
                Add Widget
            </button>
        </div>
    )
}

const AddWidget = connect()(AddWidgetComponent)
export default AddWidget