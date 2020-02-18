export const CHANGE_ROW = 'CHANGE_ROW'

function rowNum (numRows, rowSquares) {
    return {
        type : CHANGE_ROW,
        row : numRows,
        squares : rowSquares
    }
}

export default rowNum