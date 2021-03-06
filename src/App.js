import React from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Posts from "./components/Posts";
import Postform from './components/Postform';

import store from "./store";

function App() {
  return (
    <Provider store={store}>
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Postform></Postform>
        <hr/>
        <Posts></Posts>
      </div>
    </Provider>
   
  );
}

export default App;
