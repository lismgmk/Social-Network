import React from "react";
import {Field, WrappedFieldProps} from "redux-form";
import {WrappedFieldMetaProps} from "redux-form/lib/Field";
import {validateType} from "./validation";

type FormCreateFieldType = {
    children: React.ReactNode
    label: string
    meta: WrappedFieldMetaProps
}

type ComponentType = (props: WrappedFieldProps & FormCreateFieldType) => void

export const FormCreateField = ({
                                    children,
                                    label,
                                    meta: {touched, error}
                                }: FormCreateFieldType) => {
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

export const TextArea: ComponentType = (props) => {
    return (
        <FormCreateField {...props}>
            <textarea {...props.input} placeholder={props.label} {...props}/>
        </FormCreateField>
    )
}
export const TextInput: ComponentType  = (props) => {
    return (
        <FormCreateField {...props}>
            <input {...props.input} placeholder={props.label} {...props}/>
        </FormCreateField>
    )
}
export const CheckBoxInput: ComponentType  = (props) => {
    return (
        <FormCreateField {...props}>
            <input {...props.input} placeholder={props.label} {...props}/>
        </FormCreateField>
    )
}

export function RenderField<Keys extends string>(
    name: Keys,
    component: string | ComponentType,
    label: string,
    validate: string | Array<validateType>,
    type: string) {
    return (
        <Field
            type={type}
            name={name}
            component={component}
            label={label}
            validate={validate}
        />
    )
}

export type IUser = {
    email: string
    password: string
    rememberMe: boolean
}

export type IUserKey =  Extract<keyof IUser, string>