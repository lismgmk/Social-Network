import React from "react";
import {Field} from "redux-form";
import {maxLength20, required} from "../../helpers/validation";
import {TextArea} from "../../helpers/renderField";

export let MyPostsForm = (props
                              // :InjectedFormProps<myFormPostsType> & PropsType
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



