import React from 'react';
import {logInAuthor} from "../../Redux/authorReduser";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import LoginForm, {captchaType} from "../Form/LoginForm";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router";
import {formDataType} from "../../Types/types";

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        statusAuthor: state.profilePage.statusAuthor,
        isLog: state.author.isLog,
        captcha: state.app.captcha
    }
}

const LoginReduxForm = reduxForm<formDataType, captchaType>({
    form: 'loginForm'
})(LoginForm)

let LoginConnect: React.FC<PropsTypeLogin> = (props) => {
    const {isLog, captcha, logInAuthor} = props
    const loginAuthors = (data: formDataType) => logInAuthor(data)
    if (isLog) {
        return <Redirect to={'/profile'}/>
    }
    return <LoginReduxForm onSubmit={loginAuthors} captcha={captcha}/>
}

const LoginContainer = connect(mapStateToProps, {logInAuthor})(LoginConnect)

export default LoginContainer

type MapStateToPropsType = {
    statusAuthor: string
    isLog: boolean
    captcha: string | undefined
}
type MapDispatchToPropsType = {
    logInAuthor: (values: formDataType) => void
}
export type PropsTypeLogin = MapStateToPropsType & MapDispatchToPropsType
