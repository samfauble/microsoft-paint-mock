import React from 'react'
import Tools from './Tools'
import ColorSelector from './ColorSelector'
import CanvasSize from './CanvasSize'

export default function Toolbar() {
    return (
        <div>
            <Tools />
            <ColorSelector />
            <CanvasSize />
        </div>
    )
}


