import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./DialodItem/DialogItem";
import {DialogStateDispatchType} from "./DialogsContainer";
import {Redirect} from "react-router";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../helpers/renderField";
import {maxLength20, required} from "../helpers/validation";



export const Dialogs: React.FC<DialogStateDispatchType> = (props ) =>{

    const {dialogsPage, addDialog} = props

    let state = dialogsPage

    let getDialog = state.dialogs.map((item)=>{
        return <Dialog name={item.name} />
    });

    let getMessage = state.message.map((item)=>{
        return  <Message message={item.message} />
    });

    let addOneDialog = (value: myFormPostsType) => {
        addDialog(value.textarea)
    }

        return (

            <div className={s.dialogs}>

                <div className={s.dialogsItem}>
                    {getDialog}
                </div>
                <div className={s.messages}>
                    {getMessage}
                </div>

               <DialogsRedaxForm onSubmit={addOneDialog}/>

            </div>

        )
}

const DialogsForm: React.FC<InjectedFormProps<myFormPostsType>> = (props) => {
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