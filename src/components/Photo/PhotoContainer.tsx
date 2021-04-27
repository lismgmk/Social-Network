import React from "react";
// import {addDialogActionCreater, initialStateType, updateNewDialogTextActionCreater} from "../../Redux/dialogsReduser";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import Photo from "./Photo";
import {addPhotoActionCreater, photoPageType} from "../../Redux/photoReduser";


type MapStatePropsType = {
    photoPage: photoPageType
}

type MapDispatchPropsType = {
    addPhoto: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType;

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        photoPage: state.photoPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPhoto: () => {
            dispatch(addPhotoActionCreater())
        }
    }
}

const PhotoContainer = connect(mapStateToProps, mapDispatchToProps)(Photo)

export default PhotoContainer;