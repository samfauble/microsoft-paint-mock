export const CHANGE_TOOL = 'CHANGE_TOOL'

function toolChange(tool) {
    return {
        type : CHANGE_TOOL,
        tool
    }
}

export default toolChange
