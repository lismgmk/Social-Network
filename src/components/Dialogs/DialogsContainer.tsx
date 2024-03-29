import React from "react";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {addDialogActionCreater, initialStateType} from "../../Redux/dialogsReduser";
import {AppStateType} from "../../Redux/redux-store";
import {WithAuthRedirect} from "../../HOK/WithAuthRedirect";

let MapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let MapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addDialog: (text: string) => {
            dispatch(addDialogActionCreater(text))
        }
    }
}

export default compose<React.ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

type MapStateToPropsType = {
    dialogsPage: initialStateType
}

type MapDispatchToPropsType = {
    addDialog: (text: string) => void
}

export type DialogStateDispatchType = MapStateToPropsType & MapDispatchToPropsType;