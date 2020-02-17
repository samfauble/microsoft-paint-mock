import { CHANGE_TOOL } from '../actions/tool'
import { CHANGE_COLOR } from '../actions/color'
import { INIT } from '../actions/initialize'


function toolReducer(state={}, action) {
    switch(action.type) {
        case INIT:
            return {
                currentTool : 'pencil',
                currentColor : "#f44336"
            }
        case CHANGE_COLOR:
            return {
                ...state,
                currentColor : action.color
            }

        case CHANGE_TOOL:
            return {
                ...state,
                currentTool : action.tool
            }

        default:
            return state;
    }
}

export default toolReducer