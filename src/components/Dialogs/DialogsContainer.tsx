import React from "react";
import {addDialogActionCreater, updateNewDialogTextActionCreater} from "../../Redux/dialogsReduser";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
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