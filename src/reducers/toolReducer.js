import { CHANGE_SELECTED_TOOL } from '../actions/tool'
import { CHANGE_SELECTED_COLOR } from '../actions/color'
import { INIT } from '../actions/initialize'


function toolReducer (state={}, action) {
    switch (action.type) {
        case INIT :
            return {
                selectedTool : 'pencil',
                selectedColor : "#f44336"
            }
        case CHANGE_SELECTED_COLOR :
            const {color} = action
            return {
                ...state,
                selectedColor : color
            }

        case CHANGE_SELECTED_TOOL :
            return {
                ...state,
                selectedTool : action.tool
            }

        default :
            return state;
    }
}

export default toolReducer