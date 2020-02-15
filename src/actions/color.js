export const CHANGE_COLOR = 'CHANGE_COLOR'

function color(color) {
    return {
        type: CHANGE_COLOR,
        color: color
    }
}

export default color