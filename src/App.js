import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import UserContainer from './components/UserContainer';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{color: 'balck',background:'white'}}>
      Redux Module
      <div>
        <UserContainer/>
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/> */}
      </div>
    </div>
    </Provider>
  );
}

export default App;
