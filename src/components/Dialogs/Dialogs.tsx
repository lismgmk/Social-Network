import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";


export function Dialogs(props) {


    let getDataDialog = props.dialogData.map((item)=>{
         return <Dialog name={item.name}  id={item.id}/>
    });

    let getMessageDialog = props.messageData.map((item)=>{
        return  <Message message={item.message} />
    });


    return (

            <div className={s.dialogs}>



                <div className={s.dialogsItem}>
                    { getDataDialog }

                </div>

                <div className={s.messages}>
                    { getMessageDialog }

                </div>

            </div>

    )
}