import React from 'react';
import './App.css';
import {Header} from "./componets/header/Header";
import {NavBar} from "./componets/navBar/NavBar";
import {Profile} from "./componets/profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./componets/dialogs/Dialogs";
import { NavLink } from 'react-router-dom';
import { DialogsContainer } from './componets/dialogs/DialogsContainer';


function App() {
    
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                {/*<NavLink to={'/Profile'}>profile</NavLink>*/}
                {/*<NavLink to={'/Dialogs'}>dialogs</NavLink>*/}
                <Routes>
                    {/*<Route path={'/*'} element={<div>404</div>}/>                   */}
                    <Route path={'/Profile'} element={<Profile/>}/>
                    <Route path={'/Dialogs'} element={<DialogsContainer/>}/>
                    <Route path={'/News'} element={<Profile/>}/>
                    <Route path={'/Music'} element={<Profile/>}/>
                    <Route path={'/Setting'} element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
