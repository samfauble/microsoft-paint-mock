export const CHANGE_COLUMN = 'CHANGE_COLUMN'

function columnNum(numColumns, columnSquares) {
    return {
        type : CHANGE_COLUMN,
        column : numColumns,
        columnSquares
    }
}

export default columnNum