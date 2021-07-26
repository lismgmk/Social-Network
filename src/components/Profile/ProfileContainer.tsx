import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Profile} from "./Profile";
import {getProfileUser, getStatusAuthor, setStatusAuthor} from "../../Redux/profile-reducer";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router/ts4.0";
import { WithAuthRedirect} from "../../HOK/WithAuthRedirect";
import {compose} from "redux";
import {getProfileUserType} from "../../Types/types";



let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileUser: state.profilePage.profileUser,
        statusAuthor: state.profilePage.statusAuthor,
        authorId: state.author.id
    }
}

class ProfileClassContainer extends React.Component <PropsType> {
    componentDidMount() {
        let param : number | null = +this.props.match.params.userId
        if(!param) {
            param = this.props.authorId
            if(!param){
                this.props.history.push("/login");
            }
        } else {
            debugger
            this.props.getProfileUser(param)
            this.props.getStatusAuthor(param)
        }
    }
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
    // WithAuthRedirect
   )(ProfileClassContainer)

// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
    userId: string
}
// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & MapStateDispatchType
type MapStateToPropsType = {
    profileUser: getProfileUserType | null
    statusAuthor: string
    authorId: number | null
}
type MapDispatchToPropsType = {
    getProfileUser: (id: number) => void
    getStatusAuthor: (param: number) => void
    setStatusAuthor: (param: string) => void
}
export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType

