import React from 'react'
import { connect } from 'react-redux'


function Canvas({numRows, numColumns, squares}) {
    
    return (
        <div className = 'grid'
            style = {{
                gridTemplateColumns : `repeat(${numColumns}, 100px)`,
                gridTemplateRows : `repeat(${numRows}, 100px)`
            }}
        >
            {squares.map((square)=>{
                const id = square.id;
                const color = square.color;
                return(
                <div key = {id}>
                    <button 
                        className = 'csquare'
                        style = {{'backgroundColor' : `${color}`}}
                    />
                </div>
                );
            })}
        </div>
    );
}

function mapStateToProps ({canvas}){
    const {numRows, numColumns, squares} = canvas;

    return {
        numRows,
        numColumns,
        squares
    }
}

export default connect(mapStateToProps)(Canvas);