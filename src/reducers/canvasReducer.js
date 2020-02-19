import {CHANGE_ROW} from '../actions/row';
import {CHANGE_COLUMN} from '../actions/column';
import { CHANGE_SQUARE_COLOR } from '../actions/squareColor'
import { INIT } from '../actions/initialize'

function canvasReducer (state={}, action) {
    switch (action.type) {
        case INIT :
            const {type, ...square} = action
            return { 
                numRows : 1,
                numColumns : 1,
                squares : {
                    0 : square
                }
            }

        case CHANGE_ROW :
            const {row, squares} = action
            return {
                ...state,
                numRows : row,
                squares
            }

        case CHANGE_COLUMN :
            const {column, columnSquares} = action
            return {
                ...state,
                numColumns : column,
                squares : columnSquares
            }

        case CHANGE_SQUARE_COLOR : 
            return {
                ...state,
                squares : {
                    ...state.squares,
                    [action.id] : {
                        ...[action.id],
                        color : action.color
                    }
                }
            }

        default :
            return state;
    }
}

export default canvasReducer
