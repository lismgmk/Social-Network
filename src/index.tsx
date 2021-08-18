import React from "react";
import store from './Redux/redux-store';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import {BrowserRouter, HashRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
});





