import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./usersReduser";
import authorReduser from "./authorReduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReduser from "./appReduser";


let RootReducer = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    author: authorReduser,
    form: formReducer,
    app: appReduser
})

let store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export type AppStateType = ReturnType<typeof RootReducer>

export default store