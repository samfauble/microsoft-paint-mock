import {CHANGE_ROW} from '../actions/row';
import {CHANGE_COLUMN} from '../actions/column';
import { INIT } from '../actions/initialize'

function canvasReducer (state={}, action) {
    switch (action.type) {
        case INIT :
            const {id, color, nextTo} = action
            return { 
                numRows : 1,
                numColumns : 1,
                squares : [{
                    id,
                    color,
                    nextTo
                }]
            }

        case CHANGE_ROW :
            let {row, squares} = action
            return {
                ...state,
                numRows : row,
                squares
            }

        case CHANGE_COLUMN :
            let {column, columnSquares} = action
            return {
                ...state,
                numColumns : column,
                squares : columnSquares
            }

        default :
            return state;
    }
}

export default canvasReducer
