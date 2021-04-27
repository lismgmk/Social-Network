import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogsReduser";
import photoReduser from "./photoReduser";


let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    photoPage: photoReduser
})



let store = createStore(reducers);

export type AppStateType = ReturnType<typeof reducers>

export default store