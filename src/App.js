import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import Canvas from './components/Canvas'
import { connect } from 'react-redux'
import initialize from './actions/initialize'


function App({dispatch}) {
  
  const square = [{
    id: 0,
    color: '#ffff',
    nextTo: []
  }]
  
  dispatch(initialize(square))

  return (
    <div className="App">
      <Toolbar />
      <Canvas />
    </div>
  );
}

export default connect()(App)


//TODO: Implement Pencil funcitonality 
//TODO: Implement flood-fill funcitonality
