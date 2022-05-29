import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css'
import { MyPostsPropsType } from "./MyPostsContainer";
import {Post} from "./post/Post";


export const MyPosts = (props: MyPostsPropsType) => {
    let postElements = props.profilePage.posts.map(el => <Post  message={el.message} likeCount={el.likeCount}/>)
    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <>
            <div className={styles.myPost}>My post</div>
            <textarea value={props.profilePage.newPostText} onChange={onPostChange}></textarea>
            <button onClick={onAddPost}>Add post</button>
            {postElements}

        </>
    )
}