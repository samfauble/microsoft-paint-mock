import {CHANGE_ROW} from '../actions/row';
import {CHANGE_COLUMN} from '../actions/column';

function canvasReducer(state={}, action) {
    switch(action.type) {
        case CHANGE_ROW:
            let {row, squares} = action
            console.log(row)
            return {
                ...state,
                    numRows: row,
                    squares
            }

        case CHANGE_COLUMN:
            let {column, columnSquares} = action
            return {
                ...state,
                numColumns: column,
                squares: columnSquares
            }

        default:
            return state;
    }
}

export default canvasReducer
