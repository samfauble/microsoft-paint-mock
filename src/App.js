import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import Canvas from './components/Canvas'
import { connect } from 'react-redux'
import initialize from './actions/initialize'


function App({dispatch}) {
  
  //Populate initial UI state
  dispatch(initialize())

  return (
    <div className = "App">
      <Toolbar />
      <Canvas />
    </div>
  );
}

export default connect()(App)

