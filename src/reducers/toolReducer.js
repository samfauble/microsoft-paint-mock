import { CHANGE_TOOL } from '../actions/tool'
import { CHANGE_COLOR } from '../actions/color'


function toolReducer(state={}, action) {
    switch(action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                currentColor: action.color
            }

        case CHANGE_TOOL:
            return {
                ...state,
                currentTool: action.tool
            }

        default:
            return state;
    }
}

export default toolReducer