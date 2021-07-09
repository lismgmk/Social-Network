import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";
import {DialogStateDispatchType} from "./DialogsContainer";
import {Redirect} from "react-router";


export function Dialogs(props : DialogStateDispatchType) {

    let state = props.dialogsPage

    let getDialog = state.dialogs.map((item)=>{
        return <Dialog name={item.name} />
    });

    let getMessage = state.message.map((item)=>{
        return  <Message message={item.message} />
    });

    let onDialogChange = (e) => {
        let text = e.target.value;
        props.updateNewDialogText(text)
    }

    let onSendMessageClick = () => {
        props.addDialog()
    }

        return (

            <div className={s.dialogs}>

                <div className={s.dialogsItem}>
                    {getDialog}
                </div>
                <div className={s.messages}>
                    {getMessage}
                </div>

                <div className={s.dialogsWrapper}>

                    <textarea onChange={onDialogChange}
                              value={state.newDialogText}
                              placeholder='Enter your message'
                    />

                    <button onClick={onSendMessageClick}>Add post</button>
                </div>

            </div>

        )

}