import React from 'react'
import Tools from './Tools'
import CanvasSize from './CanvasSize'
import { CirclePicker } from 'react-color'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import currentColor from '../actions/color'

function Toolbar({dispatch, selectedColor}) {

    const handleColorChange = (colorString) => {
        dispatch(currentColor(colorString.hex))
    }

    return (
        <Container>
            <h1>
                Mock Paint
            </h1>
            <Tools />
            <CirclePicker 
                value = {selectedColor} 
                onChangeComplete = {handleColorChange} />
            <CanvasSize />
        </Container>
    )
}

const mapStateToProps = ({tool}) => {
    const {selectedColor} = tool;
    return {
        selectedColor
    }
}

export default connect(mapStateToProps)(Toolbar)
