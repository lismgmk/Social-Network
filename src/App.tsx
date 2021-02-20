import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";


function App() {
  return (
    <div className={s.appWrapper}>
        <Header/>
        <Nav/>
        <Profile/>
    </div>
  )
}

//
// function Header () {
//     return (
//         <div>
//
//         </div>
//     )
// }
//
// function Header () {
//     return (
//         <div>
//
//         </div>
//     )
// }
//
// function Header () {
//     return (
//         <div>
//
//         </div>
//     )
// }
//
// function Header () {
//     return (
//         <div>
//
//         </div>
//     )
// }

;

export default App;

