import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followBlock,
    getUser, isdisabledButton,
    unFollowBlock,
}
    from "../../Redux/usersReduser";
import {AppStateType} from "../../Redux/redux-store";
import Preloader from "../elseElements/Preloader";

import {
    followArrButtonSelector, followBoolButtonSelector,
    getUsers,
    pageActionPage,
    pageIsLoaded,
    pageSizeSelector,
    totalCountSelector
} from "../../Redux/usersSelector";
import {getUserItemsType} from "../../Types/types";


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

                {this.props.isLoaded ? <Preloader/> : null}
                <Users
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    clickActionPage={this.clickActionPage}
                    users={this.props.users}
                    unFollow={this.props.unFollowBlock}
                    follow={this.props.followBlock}
                    actionPage={this.props.actionPage}
                    followArrButton={this.props.followArrButton}
                />
            </>

        )
    }

}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: pageSizeSelector(state),
        totalCount: totalCountSelector(state),
        actionPage: pageActionPage(state),
        isLoaded: pageIsLoaded(state),
        followArrButton: followArrButtonSelector(state),
        followBoolButton: followBoolButtonSelector(state)
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
    getUser: (pageSize: number, actionPage: number) => void
}


export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType