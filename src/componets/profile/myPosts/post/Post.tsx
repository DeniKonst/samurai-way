import React from "react";
import styles from './Post.module.css'

type PropsType= {
    message: string
    likeCount: string
}

export const Post = (props:PropsType) => {
  return (
      <>
          <div className={styles.post}>{props.message}</div>
          <div className={styles.post}>{props.likeCount}</div>

      </>
  )
}