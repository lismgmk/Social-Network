import React from "react";
// import TextField from "@material-ui/core/TextField";
// import {Checkbox, FormControlLabel} from "@material-ui/core";



export const FormCreateField = ({ input, children, label, type, meta: { touched, error }, ...elseProps }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                {children}
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    )
}

export const TextArea = (props) => {return (
    <FormCreateField {...props}>
    <textarea {...props.input} placeholder={props.label} type={props.type} {...props.elseProps}/>
</FormCreateField>
)
}
export const TextInput = (props) => {return (
    <FormCreateField {...props}>
        <input {...props.input} placeholder={props.label} type={props.type}/>
</FormCreateField>
)
}
export const CheckBoxInput = (props) => {return (
    <FormCreateField {...props}>
        <input {...props.input} placeholder={props.label} type={props.type}/>
</FormCreateField>
)
}


// export const renderTextField = ({
//                              label,
//                              input,
//                              meta: { touched, invalid, error },
//                              ...custom
//                          }) => (
//     <TextField
//         label={label}
//         placeholder={label}
//         error={touched && invalid}
//         helperText={touched && error}
//         {...input}
//         {...custom}
//
//     />
// )
//
// export const renderCheckbox = ({ input, label }) => (
//     <div>
//         <FormControlLabel
//             control={
//                 <Checkbox
//                     checked={input.value ? true : false}
//                     onChange={input.onChange}
//                 />
//             }
//             label={label}
//         />
//     </div>
// )