import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";
import {addDialogActionCreater, updateNewDialogTextActionCreater} from "../../Redux/dialogsReduser";
import {Dialogs} from "./Dialogs";



export function DialogsContainer(props) {

    let state = props.store.getState().dialogsPage



    let addDialog = () => {
        props.store.dispatch( addDialogActionCreater() )
    }

    let onChangeValue = (text) => {
        props.store.dispatch( updateNewDialogTextActionCreater(text) )
    }

    return (

        <div>

            <Dialogs
            dialogs = {state.dialogs}
            message = {state.message}
            newDialogText = {state.newDialogText}
            addDialog = {addDialog}
            onChangeValue = {onChangeValue}
            />

        </div>

    )
}