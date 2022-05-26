import React from "react";
import styles from'./Header.module.css';
import logo from './imagesHeader/logo.jpeg'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.imgLogo} src={logo} alt=''/>
            </div>
            <span className={styles.spanText}>My social Network</span>
        </header>
    )
}