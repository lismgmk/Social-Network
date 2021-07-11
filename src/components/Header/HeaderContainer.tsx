import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {AuthorDataType, getAuthor, logOutAuthor, setLog} from "../../Redux/authorReduser";

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        idAuthor: state.author.id,
        email: state.author.email,
        login: state.author.login,
        isLog: state.author.isLog
    }
}


class HeaderContainer extends React.Component <MapStateDispatchLogType> {
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
                logOutAuthor={this.props.logOutAuthor}
                getAuthor={this.props.getAuthor}
            />
        )
    }
}

export default connect(MapStateToProps, {
    getAuthor, logOutAuthor
})(HeaderContainer)

export type MapStateDispatchLogType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    idAuthor: number | null
    email: string | null
    login: string | null
    isLog: boolean
}

type MapDispatchToPropsType = {
    getAuthor: () => void
    logOutAuthor: () => void
}

