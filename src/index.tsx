import React from "react";
import state, {
    addDialog,
    addPost,
    subscribe,
    updateNewDialogText,
    updateNewPostText
} from './DataStates/State';
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = () => {
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
debugger
rerenderEntireTree();

subscribe(rerenderEntireTree);





