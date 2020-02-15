export const CHANGE_COLUMN = 'CHANGE_COLUMN'

function column(numColumns) {
    return {
        type: CHANGE_COLUMN,
        column: numColumns
    }
}

export default column