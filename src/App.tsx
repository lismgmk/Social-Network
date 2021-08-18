import React from 'react';
import s from './App.module.css';
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect, Switch, withRouter} from "react-router";
import {AppStateType} from "./Redux/redux-store";
import {getInitialAuthor} from "./Redux/appReduser";
import Preloader from "./components/elseElements/Preloader";

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialazed: state.app.initialazed
    }
}

class App extends React.Component<MapStateDispatchToPropsType> {
    componentDidMount() {
        this.props.getInitialAuthor();
    }
    render() {
        if(!this.props.initialazed){
            return <Preloader/>
        }
        return (

                <div className={s.appWrapper}>
                    <HeaderContainer/>
                    <Nav/>
                    <div className={s.main}>
                        <Switch>

                            <Route path={PATH.SOCIAL_NULL} exact render={() => <Redirect to={PATH.SOCIAL_NETWORK}/>}/>
                            <Route exact path={PATH.SOCIAL_NETWORK} render={()=><LoginContainer/> }/>


                            <Route exact path={PATH.SOCIAL_PROFILE} render={()=><ProfileContainer/> }/>
                            <Route exact path={PATH.SOCIAL_USERS} render={()=><UsersContainer/> }/>
                            <Route path={PATH.SOCIAL_LOGIN} render={()=><LoginContainer/>} />
                            <Route path={PATH.SOCIAL_MESSAGE} render={()=><DialogsContainer/>} />
                            <Route path={PATH.SOCIAL_404} render={() => <h1>404: PAGE NOT FOUND</h1>} />
                            <Redirect from={'*'} to={PATH.SOCIAL_404}/>
                        </Switch>
                    </div>
                </div>

        )
    }
}


export const PATH = {
    SOCIAL_NETWORK: '/',
    SOCIAL_PROFILE: '/Social-Network/profile',
    SOCIAL_MESSAGE: '/Social-Network/message',
    SOCIAL_USERS: '/Social-Network/users',
    SOCIAL_LOGIN: '/Social-Network/login',
    SOCIAL_404: '/Social-Network/404',
    SOCIAL_NULL: '/',
}

export default compose<React.ComponentType>(
    connect(MapStateToProps,{getInitialAuthor}),
    withRouter
)(App)


type MapDispatchToPropsType = {
    getInitialAuthor: () => void
}
type MapStateToPropsType = {
    initialazed: boolean
}
type MapStateDispatchToPropsType = MapStateToPropsType &  MapDispatchToPropsType