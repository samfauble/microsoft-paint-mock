export const CHANGE_ROW = 'CHANGE_ROW'

function row(numRows) {
    return {
        type: CHANGE_ROW,
        row: numRows
    }
}

export default row