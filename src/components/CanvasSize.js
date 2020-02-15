import React from 'react'
import { TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import column from '../actions/column'
import row from '../actions/row'

function CanvasSize({dispatch}) {

    //CHANGE_ROW
    const handleRowChange = () => {
        dispatch(row(5))
    }
    //CHANGE_COLUMN
    const handleColumnChange = () => {
        dispatch(column(5))
    }

    return (
        <div>
            <form>
                <label> Canvas Rows: </label> 
                <TextField variant='filled' type='number' />
                <label> Canvas Columns: </label> 
                <TextField variant='filled' type='number' />
            </form>
        </div>
    )
}


export default connect()(CanvasSize)
