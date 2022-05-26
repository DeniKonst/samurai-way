import React from 'react';
import './App.css';
import {Header} from './componets/header/Header';
import {NavBar} from "./componets/navBar/NavBar";
import {Profile} from "./componets/profile/Profile";
import {Dialogs} from "./componets/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/Dialogs'} element={<Dialogs />}/>
                    <Route path={'/Profile'} element={<Profile />}/>
                    <Route path={'/News'} element={<Profile />}/>
                    <Route path={'/Music'} element={<Profile />}/>
                    <Route path={'/Setting'} element={<Profile />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
