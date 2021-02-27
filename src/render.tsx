import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './DataStates/State';
import {addPost} from './DataStates/State'

let rerenderEntireTree = (state)=>{
    ReactDOM.render(
        <React.StrictMode>

            <App state={state} addPost = {addPost}/>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;