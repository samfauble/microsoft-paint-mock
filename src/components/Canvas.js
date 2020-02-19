import React from 'react'
import { connect } from 'react-redux'
import { squareColor } from '../actions/squareColor'


function Canvas ({numRows, numColumns, squares, selectedColor, selectedTool, dispatch}) {

    const handleSquareChange = (id) => {
        if (selectedTool === 'pencil') {
            dispatch(squareColor(id, selectedColor));
        }
    }
    
    return (
        <div className = 'grid'
            style = {{
                gridTemplateColumns : `repeat(${numColumns}, 100px)`,
                gridTemplateRows : `repeat(${numRows}, 100px)`
            }}>
            
            {/* Render squares array onto UI */}
            {Object.keys(squares).map((square) => {
                const id = square;
                const color = squares[id].color;
                return (
                    <button
                        key = {id} 
                        className = 'csquare'
                        style = {{'backgroundColor' : `${color}`}}
                        onClick = {() => handleSquareChange(id)} />
                )
            })}

        </div>
    )
}

const mapStateToProps = ({canvas, tool}) => {
    const {numRows, numColumns, squares} = canvas;
    const {selectedColor, selectedTool} = tool
    return {
        numRows,
        numColumns,
        squares,
        selectedColor,
        selectedTool
    }
}

export default connect(mapStateToProps)(Canvas);