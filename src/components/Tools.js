import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import { connect } from 'react-redux'
import tool from '../actions/tool'

function Tools({dispatch}) {
    //CHANGE_TOOL
    const handleToolChange = () => {
        dispatch(tool('pencil'))
    }

    return (
        <div>
            <ButtonGroup variant='contained' size='large'>
                <Button>Pencil</Button>
                <Button>Flood-Fill</Button>
            </ButtonGroup>
        </div>
    )
}

export default connect()(Tools)
