import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {addUserActionCreater, initialStateUsersType} from "../../Redux/usersReduser";
import {AppStateType} from "../../Redux/redux-store";


type MapStateToPropsType = {
    users: initialStateUsersType
}

type MapDispatchToPropsType = {
    addUser: () => void
}

export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType

let MapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        users: state.users
    }
}

let MapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addUser: () => {
            dispatch(addUserActionCreater())
        },

    }
}


const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);
export default UsersContainer
