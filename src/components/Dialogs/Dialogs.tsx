import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";
import {addDialogActionCreater, updateNewDialogTextActionCreater} from "../../Redux/dialogsReduser";



export function Dialogs(props) {


    let getDialog = props.dialogsPage.dialogs.map((item)=>{
        return <Dialog name={item.name} />
    });


    let getMessage = props.dialogsPage.message.map((item)=>{
        return  <Message message={item.message} />
    });







    let addDialog = () => {
        // props.addDialog()
        props.dispatch( addDialogActionCreater() )
    }

    let onDialogChange = (e) => {
        let text = e.target.value;
        console.log(e.target)
        props.dispatch( updateNewDialogTextActionCreater(text) );
    }

    return (

            <div className={s.dialogs}>

                <div className={s.dialogsItem}>
                    { getDialog }
                </div>
                <div className={s.messages}>
                    { getMessage }
                </div>


                <div className={s.dialogsWrapper}>

                    <textarea onChange={onDialogChange}
                              value={props.dialogsPage.newDialogText}
                              placeholder='Enter your message'
                    />

                    <button onClick={ addDialog }>Add post</button>
                </div>

            </div>

    )
}