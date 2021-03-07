import React from "react";
import store from './DataStates/State';
import ReactDOM from "react-dom";
import App from "./App";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>

            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);





