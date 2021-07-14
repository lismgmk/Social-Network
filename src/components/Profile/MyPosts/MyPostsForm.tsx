import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {myFormPostsType} from "./MyPostsContainer";

import {IUser} from "../../Form/LoginForm";
import {Field} from "redux-form";

export let MyPostsForm = (props
                              // :InjectedFormProps<myFormPostsType> & PropsType
) => {
   return <form onSubmit={props.handleSubmit}>
       <div>
           <Field
               name="textarea"
               type="text"
               component="textarea"
               // label="Username"
               // validate={[required, maxLength15, minLength2]}
               // warn={alphaNumeric}
           />

       </div>


        <div>
            <button type="submit"
                // disabled={submitting}
            >
                Submit
            </button>
        </div>
    </form>
}




const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)