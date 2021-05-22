import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogsReduser";
import photoReduser from "./photoReduser";
import usersReduser from "./usersReduser";
import authorReduser from "./authorReduser";
import thunkMiddleware from "redux-thunk";


let RootReducer = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    photoPage: photoReduser,
    usersPage: usersReduser,
    author: authorReduser
})



let store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export type AppStateType = ReturnType<typeof RootReducer>

export default store