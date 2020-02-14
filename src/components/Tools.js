import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'

function Tools() {
    return (
        <div>
            <ButtonGroup variant='contained' size='large'>
                <Button default>Pencil</Button>
                <Button>Flood-Fill</Button>
            </ButtonGroup>
        </div>
    )
}

export default Tools
