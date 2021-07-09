import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {AppStateType} from "../Redux/redux-store";

const WithAuthorStateToProps = (state: AppStateType): WithAuthorStateToPropsType => {
    return {
        isLog: state.author.isLog
    }
}

type  WithAuthorStateToPropsType = {isLog: boolean}

export function WithAuthRedirect <T>(Component: ComponentType<T>){
    function HokComponentAuth(props: WithAuthorStateToPropsType) {

        let {isLog, ...restProps} = props

        if (isLog) {
            return <Component {...restProps as T}/>
        }
        return <Redirect to={'/login'}/>
    }

    let NewProfileContainer = connect(WithAuthorStateToProps)(HokComponentAuth)

    return NewProfileContainer
}





