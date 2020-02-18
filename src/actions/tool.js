export const CHANGE_SELECTED_TOOL = 'CHANGE_SELECTED_TOOL'

function toolChange(tool) {
    return {
        type: CHANGE_SELECTED_TOOL,
        tool
    }
}

export default toolChange
