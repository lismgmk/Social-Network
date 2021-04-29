import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogsReduser";
import photoReduser from "./photoReduser";
import usersReduser from "./usersReduser";


let RootReducer = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    photoPage: photoReduser,
    usersPage: usersReduser
})



let store = createStore(RootReducer);

export type AppStateType = ReturnType<typeof RootReducer>

export default store