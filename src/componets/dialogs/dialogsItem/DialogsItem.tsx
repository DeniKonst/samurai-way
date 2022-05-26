import React from 'react'
import styles from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type PropsType = {
    name: string
    id: string
}
export const DialogItem = (props: PropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}
