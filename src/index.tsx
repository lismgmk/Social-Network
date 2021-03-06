import React from "react";
import store from './DataStates/State';
import ReactDOM from "react-dom";
import App from "./App";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>

            <App
                state = {store.getState()}
                addPost = {store.addPost.bind(store)}
                updateNewPostText = {store.updateNewPostText.bind(store)}
                addDialog = {store.addDialog.bind(store)}
                updateNewDialogText = {store.updateNewDialogText.bind(store)}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);





