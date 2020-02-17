import React from 'react'
import { ButtonGroup, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import toolChange from '../actions/tool'

function Tools({dispatch}) {

    //CHANGE_TOOL
    const handleToolChange = (newTool) => {
        dispatch(toolChange(newTool))
    }

    return (
        <div>
            <ButtonGroup>
                <Button onClick={()=>handleToolChange('pencil')}>Pencil</Button>
                <Button onClick={()=>handleToolChange('flood')}>Flood-Fill</Button>
            </ButtonGroup>
        </div>
    )
}

export default connect()(Tools)
