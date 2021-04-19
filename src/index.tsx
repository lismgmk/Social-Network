import React from "react";
import store from './Redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext, {Provider} from "./StateContext";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store = {store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});





