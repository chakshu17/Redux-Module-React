import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{color: 'balck',background:'white'}}>
      Redux Module
      <div>
        <CakeContainer/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
