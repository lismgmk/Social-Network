import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {
    followUser, setActionPage, setLoaded, setTotalCount,
    setUser,
    unfollowUser, userDateType
}
from "../../Redux/usersReduser";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import Preloader from "../elseElements/Preloader";


type MapStateToPropsType = {
    users: Array<userDateType>
    totalCount: number
    pageSize: number
    actionPage: number
    isLoaded: boolean
}

type MapDispatchToPropsType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUser: (userDate: Array<userDateType>) => void
    setActionPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    setLoaded: (load: boolean) => void
}

export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component <MapStateDispatchType> {

    componentDidMount() {
        this.props.setLoaded(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.actionPage}`)
            .then(response => {
                this.props.setLoaded(false)
                this.props.setUser(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    };

    clickActionPage=(p:number) =>{
        debugger
        this.props.setLoaded(true)
        this.props.setActionPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                this.props.setUser(response.data.items)
                this.props.setLoaded(false)
            })

    }

    render() {
        debugger
        return (
            <>

                {this.props.isLoaded ?<Preloader/> : null}
                <Users
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    clickActionPage={this.clickActionPage}
                    users = {this.props.users}
                    unFollow = {this.props.unfollowUser}
                    follow = {this.props.followUser}
                    actionPage = {this.props.actionPage}

                />
            </>

        )
    }

}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        actionPage: state.usersPage.actionPage,
        isLoaded: state.usersPage.isLoaded
    }
}
//
// let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//
//     return {
//         follow: (userId: number) => {
//             dispatch(FollowUserActionCreater(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(UnfollowUserActionCreater(userId))
//         },
//         setUser: (userDate: Array<userDateType>) => {
//             dispatch(SetUserActionCreater(userDate))
//         },
//         setActionPage: (page: number) => {
//             dispatch(SetActionPageActionCreater(page))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(SetTotalCountActionCreater(totalCount))
//         },
//         setLoaded: (load: boolean) => {
//             dispatch(SetLoadedActionCreater(load))
//         }
//     }
// }


export default connect(MapStateToProps, {
    followUser,
    unfollowUser,
    setUser,
    setActionPage,
    setTotalCount,
    setLoaded
})(UsersContainer);
