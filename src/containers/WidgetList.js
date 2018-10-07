import {connect} from 'react-redux'
const mapStateToProps = state => ({
    widgets: state.widgets
})
const WidgetList = connect(mapStateToProps)(WidgetList)
export default WidgetList