import React from "react";
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import rerenderEntireTree from './render';
import state from './DataStates/State';
import {addPost} from "./DataStates/State";



// eslint-disable-next-line @typescript-eslint/no-unused-expressions
rerenderEntireTree(state)





