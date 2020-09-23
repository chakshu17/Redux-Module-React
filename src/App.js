import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{color: 'balck',background:'white'}}>
      Redux Module
      <div>
        <CakeContainer/>
        <HooksCakeContainer/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
