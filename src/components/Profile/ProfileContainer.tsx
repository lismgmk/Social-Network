import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Profile} from "./Profile";
import {getProfileUser, getStatusAuthor, setStatusAuthor} from "../../Redux/profile-reducer";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router/ts4.0";
import { WithAuthRedirect} from "../../HOK/WithAuthRedirect";
import {compose} from "redux";
import {getProfileUserType} from "../../Api/api";


let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileUser: state.profilePage.profileUser,
        statusAuthor: state.profilePage.statusAuthor
    }
}

class ProfileClassContainer extends React.Component <PropsType> {
    componentDidMount() {
        let param = this.props.match.params.userId;
        if(!param) param = '2';
        this.props.getProfileUser(param)
        this.props.getStatusAuthor(param)
    };
    render() {
        return (
            <>
                <Profile
                    profileUser={this.props.profileUser}
                    statusAuthor={this.props.statusAuthor}
                    setStatusAuthor={this.props.setStatusAuthor}
                />
            </>
        )
    }
}


export default compose<React.ComponentType>(
    connect(MapStateToProps, {
        getProfileUser, getStatusAuthor, setStatusAuthor
    }),
    withRouter,
    WithAuthRedirect
   )(ProfileClassContainer)

// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
    userId: string
}
// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & MapStateDispatchType
type MapStateToPropsType = {
    profileUser: getProfileUserType
    statusAuthor: string
}
type MapDispatchToPropsType = {
    getProfileUser: (id: string) => void
    getStatusAuthor: (param: string) => void
    setStatusAuthor: (param: string) => void
}
export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType

