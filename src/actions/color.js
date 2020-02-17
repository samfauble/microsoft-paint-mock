export const CHANGE_COLOR = 'CHANGE_COLOR'

function currentColor(color) {
    return {
        type : CHANGE_COLOR,
        color
    }
}

export default currentColor