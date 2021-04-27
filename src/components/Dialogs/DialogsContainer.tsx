import React from "react";
import {connect} from "react-redux";

import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {addDialogActionCreater, initialStateType, updateNewDialogTextActionCreater} from "../../Redux/dialogsReduser";
import {AppStateType} from "../../Redux/redux-store";


type MapStateToPropsType = {
    dialogsPage: initialStateType
}

type MapDispatchToPropsType = {
    addDialog: () => void
    updateNewDialogText: (text: string) => void
}

export type DialogStateDispatchType = MapStateToPropsType & MapDispatchToPropsType;

let MapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let MapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addDialog: () => {
            dispatch(addDialogActionCreater())
        },
        updateNewDialogText: (text: string) => {
            dispatch(updateNewDialogTextActionCreater(text))
        }
    }
}


const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);
export default DialogsContainer
