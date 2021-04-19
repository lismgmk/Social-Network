import React from "react";
import store from './Redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>

            <App
                store={store}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
});





