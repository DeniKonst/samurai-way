import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';

export const NavBar = () => {
    return (
        <>
        <nav className={styles.nav}>
            <div className={styles.item}>
            <NavLink to={'/Dialogs'} className={({isActive}) =>(isActive? styles.active : styles.item)}> Dialogs </NavLink>
            </div>
        <div className={styles.item}>
            <NavLink to={'/Profile'} className={({isActive}) =>(isActive? styles.active : styles.item)} > Profile </NavLink>
        </div>
            <div className={styles.item}>
                <NavLink to={'/News'} className={({isActive}) =>(isActive? styles.active : styles.item)} > News </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/Music'} className={({isActive}) =>(isActive? styles.active : styles.item)} > Music </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/Setting'} className={({isActive}) =>(isActive? styles.active : styles.item)} > Setting </NavLink>
            </div>
        </nav>
        </>
    )
}