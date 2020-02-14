import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import Canvas from './components/Canvas'

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Canvas />
    </div>
  );
}

export default App;

//TODO: Implement global state
//TODO: Implement Canvas size functionality
//TODO: Implement Pencil funcitonality 
//TODO: Implement flood-fill funcitonality
