import React from 'react';
import s from './App.module.css';
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {Dialogs} from "./components/Dialogs/Dialogs";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";




function App() {

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Nav/>
                <div className={s.main}>
                    <Route path='/profile' render={
                        () => <ProfileContainer
                        />
                    }/>
                    <Route path='/message' render={
                        () => <DialogsContainer/>
                    }/>
                    <Route path='/login' component={Login}/>
                    <Route path='/users' render={
                        () => <UsersContainer/>
                    }/>
                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;

