import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArraySortingController from './Components/ArraySortingController/ArraySortingController';

function App() {
  return (
    <div className="App">
      <ArraySortingController lenght={100} range={{ min: 5, max: 1000 }} />
    </div>
  );
}

export default App;
