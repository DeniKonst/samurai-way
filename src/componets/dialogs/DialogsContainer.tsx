import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {initialDialogsStateType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/reducers/dialog-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";
// import styles from './Dialogs.module.css';


type MapStatePropsType = {
    dialogsPage: initialDialogsStateType
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)