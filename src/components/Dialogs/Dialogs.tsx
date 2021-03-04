import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";
import state from "../../DataStates/State";


export function Dialogs(props) {

debugger
    let getDataDialog = props.dialogData.map((item)=>{
         return <Dialog name={item.name}  id={item.id}/>
    });

    let getMessageDialog = props.messageData.map((item)=>{
        return  <Message message={item.message} />
    });

    let linkTextarea : any = React.createRef();



    let updateTextarea = () => {
        let text = linkTextarea.current.value;
        props.textAreaChange(text);
        // linkTextarea.current.value = ''

    }

    let ChangeaDialog = () => {

       props.addDialog(linkTextarea.current.value)
    }

    return (

            <div className={s.dialogs}>



                <div className={s.dialogsItem}>
                    { getDataDialog }

                </div>

                <div className={s.messages}>
                    { getMessageDialog }

                </div>
                <div className={s.dialogsWrapper}>
                    <textarea  ref={linkTextarea} onChange={updateTextarea}/>
                    <button onClick={ChangeaDialog}>Add post</button>
                </div>

            </div>

    )
}