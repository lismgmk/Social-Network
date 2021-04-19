import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";
import {addDialogActionCreater, updateNewDialogTextActionCreater} from "../../Redux/dialogsReduser";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StateContext";


export function DialogsContainer() {



    return <StoreContext.Consumer>
        {
            (store) => {
             let state = store.getState().dialogsPage


            let addDialog = () => {
                store.dispatch(addDialogActionCreater())
            }

            let onChangeValue = (text) => {
                store.dispatch(updateNewDialogTextActionCreater(text))
            }

            return  <Dialogs
                dialogs={state.dialogs}
                message={state.message}
                newDialogText={state.newDialogText}
                addDialog={addDialog}
                onChangeValue={onChangeValue}
            />
        }}
    </StoreContext.Consumer>

}