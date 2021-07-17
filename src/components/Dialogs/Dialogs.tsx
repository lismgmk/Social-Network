import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";
import {DialogStateDispatchType} from "./DialogsContainer";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../helpers/renderField";
import {maxLength20, required} from "../helpers/validation";



export function Dialogs(props : DialogStateDispatchType) {

    let state = props.dialogsPage

    let getDialog = state.dialogs.map((item)=>{
        return <Dialog name={item.name} />
    });

    let getMessage = state.message.map((item)=>{
        return  <Message message={item.message} />
    });

    let addDialog = (value: myFormPostsType) => {
        props.addDialog(value.textarea)
    }

        return (

            <div className={s.dialogs}>

                <div className={s.dialogsItem}>
                    {getDialog}
                </div>
                <div className={s.messages}>
                    {getMessage}
                </div>

               <DialogsRedaxForm onSubmit={addDialog}/>

            </div>

        )
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.dialogsWrapper}>

                <Field
                    name="textarea"
                    type="text"
                    component={TextArea}
                    label="Enter message"
                    validate={[required, maxLength20]}
                />

                <button>Add post</button>
            </div>
    </form>
    )
}

let DialogsRedaxForm = reduxForm<myFormPostsType, {}>({
    form: 'dialogsForm'
})(DialogsForm)

type myFormPostsType = {
    textarea: string
}