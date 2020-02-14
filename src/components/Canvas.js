import React, { Component } from 'react'
import CanvasSquare from './CanvasSquare'
import { GridList, Container } from '@material-ui/core'

export default class Canvas extends Component {
    render() {
        return (
                <GridList>
                    <CanvasSquare />
                    <CanvasSquare />
                    <CanvasSquare />
                </GridList>
        )
    }
}
