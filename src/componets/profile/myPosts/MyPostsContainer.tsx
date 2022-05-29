import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./post/Post";
import {MyPosts} from "./MyPosts";
import {addPostAC, initialStateType, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";


type MapStatePropsType = {
    profilePage: initialStateType
}

type MapDispatchPropsType = {
    addPost: ()=> void
    updateNewPostText: (text:string)=> void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state:AppStateType) => {
    return {
               profilePage: state.profilePage
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text:string) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)