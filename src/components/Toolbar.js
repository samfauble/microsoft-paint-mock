import React from 'react'
import Tools from './Tools'
import CanvasSize from './CanvasSize'
import { CirclePicker } from 'react-color'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import color from '../actions/color'

export function Toolbar({dispatch}) {

    //CHANGE_COLOR
    const handleColorChange = () => {
        dispatch(color('white'))
    }

    return (
        <Container>
            <h1>Mock Paint</h1>
            <Tools />
            <CirclePicker />
            <CanvasSize />
        </Container>
    )
}

export default connect()(Toolbar)
