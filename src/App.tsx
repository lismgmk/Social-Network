import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';
import {BrowserRouter, Route} from "react-router-dom";
import store from "./Redux/redux-store";
import Photo from "./components/Photo/Photo";


function App(props) {
debugger
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>

                <Nav/>
                <div className={s.main}>

                    <Route path='/profile' render={
                        () => <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />

                    }/>
                    <Route path='/message' render={
                        () => <Dialogs
                            store = {props.store}
                        />
                    }/>
                    <Route path='/news' component = {News}/>
                    <Route path='/music' component = {Music}/>
                    <Route path='/setting' component = {Setting}/>
                    {/*<Route path='/photo' render = {() =>*/}
                    {/*    // <Photo photoPage = {store._state.photoPage}/>*/}
                    {/*}/>*/}


                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;

