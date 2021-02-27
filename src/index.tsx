import React from "react";
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import rerenderEntireTree from './render';
import state from './DataStates/State';


rerenderEntireTree(state);

ReactDOM.render(
  <React.StrictMode>


          <App state={state}/>


  </React.StrictMode>,


  document.getElementById('root')
);



