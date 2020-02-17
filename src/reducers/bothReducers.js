import canvasReducer from './canvasReducer'
import toolReducer from './toolReducer'
import squaresReducer from './squaresReducer'
import {combineReducers} from 'redux'

export const bothReducers = combineReducers({
    canvas: canvasReducer,
    tool: toolReducer,
    squares: squaresReducer
})