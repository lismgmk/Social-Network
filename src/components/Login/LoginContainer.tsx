import React from 'react';
import {logInAuthor} from "../../Redux/authorReduser";
import {formDataType} from "../../Api/api";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import LoginForm from "../Form/LoginForm";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router";

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        statusAuthor: state.profilePage.statusAuthor,
        isLog: state.author.isLog
    }
}

const LoginReduxForm = reduxForm<formDataType, {}>({
    form: 'loginForm'
    // validateLogin
})(LoginForm)



let LoginConnect = (props: PropsTypeLogin) => {
    const loginAuthor = (data : formDataType) => props.logInAuthor(data)
debugger
    if (props.isLog) {
        return <Redirect to={'/profile'}/>
    }
        return <LoginReduxForm onSubmit={loginAuthor} />

}


const LoginContainer = connect(mapStateToProps, {logInAuthor})(LoginConnect)

export default LoginContainer

type MapStateToPropsType = {
    statusAuthor: string
    isLog: boolean
}
type MapDispatchToPropsType = {
    logInAuthor: (values: formDataType) => void
}
export type PropsTypeLogin = MapStateToPropsType & MapDispatchToPropsType
