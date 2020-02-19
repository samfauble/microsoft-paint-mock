export const CHANGE_SQUARE_COLOR = 'CHANGE_SQUARE_COLOR'


export function squareColor (id, color) {
    return {
        type : CHANGE_SQUARE_COLOR,
        id,
        color
    }
}

