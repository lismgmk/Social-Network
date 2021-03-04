import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, {addDialog, addPost, updateNewDialogText, updateNewPostText} from "./DataStates/State";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>

            <App
                state = {state}
                addPost = {addPost}
                updateNewPostText = {updateNewPostText}
                addDialog = {addDialog}
                updateNewDialogText = {updateNewDialogText}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderEntireTree;