import React from 'react'
import { TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import columnNum from '../actions/column'
import rowNum from '../actions/row'


function CanvasSize ({numRows, numColumns, dispatch}) {

    //EFFECT: Returns list of squares for canvas
    const makeSquares = (squares, cols) => {
        const numberCols = Number(cols);
        const squareList = [];
        for (let i = 0; i <= squares - 1; i++) {
            let square = {
                id : i,
                color : '#ffffff',
                nextTo : [i - 1, i + 1, i + numberCols, i - numberCols]
            }
            squareList.push(square);
        }
        return squareList;
    }

    //EFFECT: Changes number of rows and canvas square array
    const handleRowChange = (event) => {
        const rowEvent = event.target.value;
        const rows = Number(rowEvent);
        const numSquares = rows * numColumns;
        const list = makeSquares(numSquares, numColumns);

        dispatch(rowNum(rowEvent, list));
    }

    //EFFECT: Changes number of columns and canvas square array
    const handleColumnChange = (event) => {
        const columnEvent = event.target.value;
        const columns = Number(columnEvent);
        const numSquares = columns * numRows;
        const list = makeSquares(numSquares, columns);

        dispatch(columnNum(columnEvent, list));
    }

    return (
        <div>
            <form>
                <label> 
                    Canvas Rows: 
                </label> 
                <TextField 
                    variant = 'filled' 
                    type = 'number' 
                    value = {numRows} 
                    onChange = {handleRowChange} />
                <label> 
                    Canvas Columns: 
                </label> 
                <TextField 
                    variant = 'filled' 
                    type = 'number' 
                    value = {numColumns} 
                    onChange = {handleColumnChange} />
            </form>
        </div>
    )
}

const mapStateToProps = ({canvas}) => {
    const {numRows, numColumns} = canvas
    return {
        numRows, 
        numColumns
    }
}


export default connect(mapStateToProps)(CanvasSize)
