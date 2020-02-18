export const INIT = 'INIT'

function initialize() {
    return {
        type: INIT,
        id: 0,
        color: '#ffffff',
        nextTo: []
    }
}

export default initialize