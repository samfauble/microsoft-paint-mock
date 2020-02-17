export const INIT = 'INIT'

function initialize(square) {
    return {
        type : INIT,
        square,
    }
}

export default initialize