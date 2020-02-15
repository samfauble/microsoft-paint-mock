import { CHANGE_TOOL } from '../actions/tool'
import { CHANGE_COLOR } from '../actions/color'


function toolReducer(state={}, action) {
    switch(action) {
        case CHANGE_COLOR:
           const {color}=action 
            return {
                ...state,
                color: color
            }

        case CHANGE_TOOL:
            const {tool}=action
            return {
                ...state,
                tool: tool
            }

        default:
            return state;
    }
}

export default toolReducer