import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css';
import {DialogsContainer, DialogsPropsType} from "./DialogsContainer";
import {DialogItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";

export const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage
    let dialogElements = state.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>)
    let messageElements = state.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div>{dialogElements}
                </div>
            
            </div>
            
            <div className={styles.messages}>
                <div>{messageElements}</div>
                
                    </div>

                                    <textarea value={newMessageBody}
                                              onChange={onNewMessageChange}>
                                              {/*// placeholder='Enter your message'> */}
                                </textarea>
                    {/*        </div>*/}
                            <div>
                                <button onClick={onSendMessageClick}>Send</button>
                            </div>
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                )
                }