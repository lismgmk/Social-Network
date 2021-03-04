import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, textAreaChange, addDialog} from './DataStates/State'

let rerenderEntireTree = (state)=>{
    ReactDOM.render(
        <React.StrictMode>

            <App
                state = {state}
                addPost = {addPost}
                textAreaChange = {textAreaChange}
                addDialog = {addDialog}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;