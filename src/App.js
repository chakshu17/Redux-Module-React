import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <div className="App" style={{color: 'balck',background:'white'}}>
      Redux Module
      <div>
        <CakeContainer/>
      </div>
    </div>
  );
}

export default App;
