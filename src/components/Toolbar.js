import React from 'react'
import Tools from './Tools'
import { CirclePicker } from 'react-color'
import { Container, TextField } from '@material-ui/core'

export default function Toolbar() {
    return (
        <Container>
            <h1>Mock Paint</h1>
            <Tools />
            <CirclePicker />
            <form>
                <label> Canvas Size: </label> 
                <TextField variant='filled' type='number' />
            </form>
        </Container>
    )
}


