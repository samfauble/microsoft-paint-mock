import React from 'react'
import { ButtonGroup, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import toolChange from '../actions/tool'

function Tools({dispatch, selectedColor}) {

    //EFFECT: Changes currently-selected tool
    const handleToolChange = (newTool) => {
        dispatch(toolChange(newTool));
    }

    return (
        <div>
            <ButtonGroup>
                <Button 
                    onClick = {() => handleToolChange('pencil')}
                    style = {{color : `${selectedColor}`}}>
                    Pencil
                </Button>
                <Button 
                    onClick = {() => handleToolChange('flood')}
                    style = {{color : `${selectedColor}`}}>
                    Flood-Fill
                </Button>
            </ButtonGroup>
        </div>
    )
}

const mapStateToProps = ({tool}) => {
    const {selectedColor} = tool;
    return {
        selectedColor
    }
}

export default connect(mapStateToProps)(Tools)
