export const CHANGE_TOOL = 'CHANGE_TOOL'

function tool(tool) {
    return {
        type: CHANGE_TOOL,
        tool: tool
    }
}

export default tool
