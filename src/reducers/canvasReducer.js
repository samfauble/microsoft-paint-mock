import {CHANGE_ROW} from '../actions/row';
import {CHANGE_COLUMN} from '../actions/column';

function canvasReducer(state={}, action) {
    switch(action.type) {
        case CHANGE_ROW:
            const {row} = action
            return {
                ...state,
                    numRows: row
            }

        case CHANGE_COLUMN:
            const {column} = action
            return {
                ...state,
                numColumns: column
            }

        case CHANGE_ROW, CHANGE_COLUMN:
            const {numRows, numColumns} = state
            const squareNum = numRows*numColumns
            const squareArray = []
            const squareLoop = () => {                  //Populate list of squares on the canvas
                for(let i=0; i<=squareNum-1; i++){
                    let sq = {
                        id: i,
                        color: 'white',
                        nextTo: [i-1, i+1, i-numColumns, i+numColumns]
                    }
                    squareArray.concat(sq);
                }
            }
            return {
                ...state,
                canvasSquares: squareArray
            }

        default:
            return state;
    }
}

export default canvasReducer
