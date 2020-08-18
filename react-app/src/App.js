import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArrayVisualizer from './Components/ArrayVisualizer/ArrayVisualizer';

function App() {
  return (
    <div className="App">
      <ArrayVisualizer lenght={100} range={{ min: 5, max: 1000 }} />
    </div>
  );
}

export default App;
