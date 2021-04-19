import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";

export function Dialogs(props) {

    let getDialog = props.dialogs.map((item)=>{
        return <Dialog name={item.name} />
    });

    let getMessage = props.message.map((item)=>{
        return  <Message message={item.message} />
    });



    let onDialogChange = (e) => {
        let text = e.target.value;
        props.onChangeValue(text)
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
                              value={props.newDialogText}
                              placeholder='Enter your message'
                    />

                <button onClick={props.addDialog}>Add post</button>
            </div>

        </div>

    )
}