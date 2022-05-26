import React from "react";
import styles from './MyPosts.module.css'
import {Post} from "./post/Post";

type PostType = {
    message: string
    likeCount: string
}

let postData: PostType[] = [
    {message: "hi gues", likeCount: '12'},
    {message: "hi girls", likeCount: '33'}
]

let postElements = postData.map(el => <Post message={el.message} likeCount={el.likeCount}/>)

export const MyPosts = () => {
    return (
        <>
            <div className={styles.myPost}>My post</div>
            <textarea></textarea>
            <button>Add post</button>
            {postElements}

        </>
    )
}