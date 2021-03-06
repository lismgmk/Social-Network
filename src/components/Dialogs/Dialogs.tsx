import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";



export function Dialogs(props) {


    let getDialog = props.dialogsPage.dialogs.map((item)=>{
        return <Dialog name={item.name} />
    });


    let getMessage = props.dialogsPage.message.map((item)=>{
        return  <Message message={item.message} />
    });



    let linkTextarea : any = React.createRef();



    let addDialog = () => {
        // props.addDialog()
        props.dispatch({ type: 'ADDDIALOG'})
    }

    let onDialogChange = () => {
        let text = linkTextarea.current.value;
        props.dispatch({ type : 'UPDATENEWDIALOGTEXT', newDialogText : text});
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

                    <textarea  ref={linkTextarea} onChange={ onDialogChange }
                        value = {props.dialogsPage.newDialogText}
                    />

                    <button onClick={ addDialog }>Add post</button>
                </div>

            </div>

    )
}