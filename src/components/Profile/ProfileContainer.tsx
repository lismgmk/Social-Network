import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import {Profile} from "./Profile";
import {addFullNameUser, addLookingForAJobUser, addPhotosUser} from "../../Redux/profile-reducer";
import {withRouter} from "react-router";
import {match} from "assert";
import {RouteComponentProps} from "react-router/ts4.0";


type MapStateToPropsType = {
    photosUser: string
    fullNameUser: string
    lookingForAJobUser: boolean
}

type MapDispatchToPropsType = {
    addPhotosUser: (photo: string) => void
    addFullNameUser: (name: string) => void
    addLookingForAJobUser: (job: boolean) => void
}

export type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component <PropsType> {

    componentDidMount() {


        let param = this.props.match.params.userId;
        if(!param) param = '2';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${param}`)
            .then(response => {
                this.props.addPhotosUser(response.data.photos.large)
                this.props.addFullNameUser(response.data.fullName)
                this.props.addLookingForAJobUser(response.data.lookingForAJob)
            })
    };



    render() {

        return (
            <>
                <Profile {...this.props}
                />
            </>

        )
    }

}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        photosUser: state.profilePage.photosUser,
        fullNameUser: state.profilePage.fullNameUser,
        lookingForAJobUser: state.profilePage.lookingForAJobUser
    }
}

// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
    userId: string
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & MapStateDispatchType


let withRouteDataComponent = withRouter(ProfileContainer)

export default connect(MapStateToProps, {
    addPhotosUser,
    addFullNameUser,
    addLookingForAJobUser
})(withRouteDataComponent);
