import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {maxLength20, required} from "../../helpers/validation";
import {TextArea} from "../../helpers/renderField";
import {myFormPostsType} from "./MyPostsContainer";

export let MyPostsForm = (props
                               :InjectedFormProps<myFormPostsType>
) => {
   return <form onSubmit={props.handleSubmit}>
       <div>
           <Field
               name="textarea"
               type="text"
               component={TextArea}
               label="Enter message"
               validate={[required, maxLength20]}
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



