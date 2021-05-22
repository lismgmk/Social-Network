import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";

import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';
import {BrowserRouter, Route} from "react-router-dom";

import PhotoContainer from "./components/Photo/PhotoContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";




function App() {

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <HeaderContainer/>

                <Nav/>
                <div className={s.main}>

                    <Route path='/profile/:userId' render={
                        () => <ProfileContainer
                        />

                    }/>
                    <Route path='/message' render={
                        () => <DialogsContainer
                        />
                    }/>
                    <Route path='/news' component = {News}/>
                    <Route path='/login' component = {Login}/>
                    <Route path='/music' component = {Music}/>
                    <Route path='/setting' component = {Setting}/>
                    <Route path='/photo' render={
                        ()=> <PhotoContainer
                        />
                    }/>
                    <Route path='/users' render={
                        ()=> <UsersContainer
                        />
                    }/>



                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;

