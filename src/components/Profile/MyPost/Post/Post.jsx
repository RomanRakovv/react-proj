import React from "react";
import cls from './Post.module.css'

const Post = () => {
    return (
        <div className={cls.item}>
            <img src="https://sun9-66.userapi.com/c633720/v633720206/2ed40/68zDViEI0TA.jpg?ava=1" alt=""/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>

    )
}

export default Post;