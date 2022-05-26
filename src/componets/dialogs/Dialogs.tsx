import React from "react";
import styles from './Dialogs.module.css';
import {DialogItem, PropsType} from "./dialogsItem/DialogsItem";
import {Message, PropsMesType} from "./message/Message";

let dialogsData: Array<PropsType> = [
    {id:'1', name: 'Denis'},
    {id: '2', name: 'Olga'},
    {id: '3', name: 'Alisa'},
    {id: '4', name: 'Yana'}
]

let dialogElements = dialogsData.map(el =>  <DialogItem name={el.name} id={el.id}/>)

let messagesData: Array<PropsMesType> = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Hello'},
    {id: '3', message: 'Salut'},
    {id: '4', message: 'Yo'}
]

let newMessageBody = ''

let messageElements = messagesData.map(el =>  <Message message={el.message} id={el.id}/>)

let onSendMessageClick = () => {

}

let onNewMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
 let body = event.target.value
}

export const Dialogs = () => {


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div>{dialogElements}</div>
            </div>

            <div className={styles.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}