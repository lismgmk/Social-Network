import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Users from "./Users";
import {
    followBlock,
    followUser, getUser, isdisabledButton, setLoaded, setTotalCount,
    setUser, unFollowBlock,
}
    from "../../Redux/usersReduser";
import {AppStateType} from "../../Redux/redux-store";
import Preloader from "../elseElements/Preloader";
import {getUserItemsType} from "../../Api/api";


class UsersContainer extends React.Component <MapStateDispatchType> {

    componentDidMount() {
        this.props.getUser(this.props.pageSize, this.props.actionPage)
    };

    clickActionPage = (p: number) => {
        this.props.getUser(this.props.pageSize, p)
    }

    render() {

        return (
            <>

                {this.props.isLoaded ?<Preloader/> : null}
                <Users
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    clickActionPage={this.clickActionPage}
                    users = {this.props.users}
                    unFollow = {this.props.unFollowBlock}
                    follow = {this.props.followBlock}
                    actionPage = {this.props.actionPage}
                    isdisabledButton = {this.props.isdisabledButton}
                    followArrButton = {this.props.followArrButton}
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
        isLoaded: state.usersPage.isLoaded,
        followArrButton: state.usersPage.followArrButton,
        followBoolButton: state.usersPage.followBoolButton
    }
}

export default connect(MapStateToProps, {
    followBlock,
    unFollowBlock,
    isdisabledButton,
    getUser
})(UsersContainer);

type MapStateToPropsType = {
    users: Array<getUserItemsType>
    totalCount: number
    pageSize: number
    actionPage: number
    isLoaded: boolean
    followArrButton: Array<number>
    followBoolButton: boolean
}

type MapDispatchToPropsType = {
    followBlock: (userId: number) => void
    unFollowBlock: (userId: number) => void
    isdisabledButton: (followBoolButton: boolean, id: number) => void
    getUser: (pageSize: number, actionPage: number)=> void
}


export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType