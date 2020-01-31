import React from 'react';
import './App.css';

import CheeseTypes from './components/CheeseTypes';
import Featured from './components/Featured';
import OrderCheese from './components/OrderCheese';


function App() {
  return (
    <div className="App">
      <Featured />
      <CheeseTypes />
      {/* put order form here */}
      <OrderCheese />
    </div>
  );
}

export default App;
