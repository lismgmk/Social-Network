import React from "react";
import store from './Redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store = {store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
});





