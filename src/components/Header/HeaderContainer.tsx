import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {AuthorDataType, getAuthor, setLog} from "../../Redux/authorReduser";
import axios from "axios";
import {headerApi} from "../../Api/api";

export type MapStateToPropsType = {
    idAuthor: number | null
    email: string | null
    login: string | null
    isLog: boolean
}

type MapDispatchToPropsType = {
    getAuthor: () => void
}

let MapStateToProps = (state: AppStateType) : MapStateToPropsType=> {
    return {
        idAuthor : state.author.id,
        email: state.author.email,
        login: state.author.login,
        isLog: state.author.isLog
    }

}


type MapStateDispatchType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <MapStateDispatchType>{

    componentDidMount() {
this.props.getAuthor()

    }

    render() {

        return (
            <Header
                idAuthor={this.props.idAuthor}
                email={this.props.email}
                login={this.props.login}
                isLog={this.props.isLog}
            />
        )
    }
}

export default connect (MapStateToProps, {
    getAuthor
})(HeaderContainer)