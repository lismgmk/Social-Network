import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";
import {addDialogActionCreater, updateNewDialogTextActionCreater} from "../../Redux/dialogsReduser";



export function Dialogs(props) {

    let state = props.store.getState().dialogsPage

    let getDialog = state.dialogs.map((item)=>{
        return <Dialog name={item.name} />
    });

    let getMessage = state.message.map((item)=>{
        return  <Message message={item.message} />
    });

    let addDialog = () => {
        props.store.dispatch( addDialogActionCreater() )
    }

    let onDialogChange = (e) => {
        let text = e.target.value;
        console.log(e.target)
        props.store.dispatch( updateNewDialogTextActionCreater(text) );
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

                <button onClick={addDialog}>Add post</button>
            </div>

        </div>

    )
}