import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {
    FollowUserActionCreater,
     SetUserActionCreater,
    UnfollowUserActionCreater, userDateType,

} from "../../Redux/usersReduser";
import {AppStateType} from "../../Redux/redux-store";


type MapStateToPropsType = {
    users: Array<userDateType>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUser: (userDate: Array<userDateType>) => void
}

export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType

let MapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(FollowUserActionCreater(userId))
        },
        unFollow: (userId: number) => {
            dispatch(UnfollowUserActionCreater(userId))
        },
        setUser: (userDate: Array<userDateType>) => {
            dispatch(SetUserActionCreater(userDate))
        }
    }
}


const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);
export default UsersContainer
