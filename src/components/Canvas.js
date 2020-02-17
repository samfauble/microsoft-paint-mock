import React from 'react'
import { connect } from 'react-redux'


export function Canvas(canvas) {
    const {numRows, numColumns} = canvas

    //Needed state: Canvas rows, Canvas columns, id & color of each square, current tool, current color
        return (
            <div className='grid'
                style={{
                    gridTemplateColumns: `repeat(${numColumns}, 100)`,
                    gridTemplateRows: `repeat(${numRows}, 100)`
                }}
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