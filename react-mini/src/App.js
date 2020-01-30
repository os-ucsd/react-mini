import React from 'react';
import logo from './logo.svg';
import './App.css';

import CheeseTypes from './components/CheeseTypes';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <About />
      <CheeseTypes />
      {/* put order form here */}
    </div>
  );
}

export default App;
