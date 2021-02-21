import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';
import {BrowserRouter} from "react-router-dom";




function App() {
  return (
      <BrowserRouter>
          <div className={s.appWrapper}>
              <Header/>
              <Nav/>
              <div className={s.main}>

                  <Route title={'profile'}  path='/profile' component={Profile} />
                  <Route title={'message'}  path='/message' component={Dialogs} />
                  <Route title={'news'} path='/news' component={News} />
                  <Route title={'music'} path='/music' component={Music} />
                  <Route title={'setting'} path='/setting' component={Setting} />
              </div>
          </div>
      </BrowserRouter>

  )
}

export default App;

