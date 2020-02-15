import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'


export function Canvas() {
   
    //Needed state: Canvas rows, Canvas columns, id & color of each square, current tool, current color
        return (
            <div className='grid'
                style={{'gridTemplateColumns': `repeat(5, 100px)`,
                        'gridTemplateRows': `repeat(5, 100px)`,}}
            >
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
                <button className='csquare'>CSquare</button>
            </div>
        )
}

export default connect()(Canvas)