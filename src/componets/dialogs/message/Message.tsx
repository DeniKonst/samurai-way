import React from "react";
import styles from './../Dialogs.module.css';



export type PropsMesType = {
    id: string
    message: string
}


export const Message = (props: PropsMesType) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}
