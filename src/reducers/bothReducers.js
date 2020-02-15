import canvasReducer from './canvasReducer'
import toolReducer from './toolReducer'
import {combineReducers} from 'redux'

export const bothReducers = combineReducers({
    canvas: canvasReducer,
    tool: toolReducer
})