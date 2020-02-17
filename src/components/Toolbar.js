import React from 'react'
import Tools from './Tools'
import CanvasSize from './CanvasSize'
import { CirclePicker } from 'react-color'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import currentColor from '../actions/color'

function Toolbar({dispatch}, tool) {

    const {color}=tool
    //CHANGE_COLOR
    const handleColorChange = (colorString) => {
        dispatch(currentColor(colorString.hex))
    }

    return (
        <Container>
            <h1>Mock Paint</h1>
            <Tools />
            <CirclePicker value={color} onChangeComplete={handleColorChange} />
            <CanvasSize />
        </Container>
    )
}

export default connect()(Toolbar)
