export const CHANGE_SELECTED_COLOR = 'CHANGE_SELECTED_COLOR'

function currentColor (color) {
    return {
        type: CHANGE_SELECTED_COLOR,
        color
    }
}

export default currentColor