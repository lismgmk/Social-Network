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
                            <Route exact path={"/Social-Network"} render={()=><ProfileContainer/> }/>
                            <Route exact path={"/profile"} render={()=><ProfileContainer/> }/>
                            <Route exact path={"/"} render={()=><ProfileContainer/> }/>
                            <Route path={"/login"} render={()=><LoginContainer/>} />
                            <Route path={"/message"} render={()=><DialogsContainer/>} />
                            <Route path={"/users"} render={()=><UsersContainer/>} />


                            <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                            <Redirect from={'*'} to={'/404'}/>

                        </Switch>
                        {/*<Route path='/profile' render={*/}
                        {/*    () => <ProfileContainer*/}
                        {/*    />*/}
                        {/*}/>*/}
                        {/*<Route path='/message' render={*/}
                        {/*    () => <DialogsContainer/>*/}
                        {/*}/>*/}
                        {/*<Route path='/login' component={LoginContainer}/>*/}
                        {/*<Route path='/users' render={*/}
                        {/*    () => <UsersContainer/>*/}
                        {/*}/>*/}
                    </div>
                </div>

        )
    }
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