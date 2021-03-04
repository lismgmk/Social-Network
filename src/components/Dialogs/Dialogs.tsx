import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";
import state from "../../DataStates/State";


export function Dialogs(props) {


    let getDialog = state.dialogsPage.dialogs.map((item)=>{
        return <Dialog name={item.name} />
    });


    let getMessage = state.dialogsPage.message.map((item)=>{
        return  <Message message={item.message} />
    });



    let linkTextarea : any = React.createRef();



    let addDialog = () => {
        props.addDialog()
    }

    let onDialogChange = () => {
        let text = linkTextarea.current.value;
        props.updateNewDialogText(text);
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
                        value = {state.dialogsPage.newDialogText}
                    />

                    <button onClick={ addDialog }>Add post</button>
                </div>

            </div>

    )
}