import React from "react";
import {addDialogActionCreater, updateNewDialogTextActionCreater} from "../../Redux/dialogsReduser";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Store";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeValue: (text) => {
            dispatch(updateNewDialogTextActionCreater(text))
        },
        addDialog: () => {
            dispatch(addDialogActionCreater())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;