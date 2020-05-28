import React from "react";
import cls from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {


    let posts = props.postsData.map( p => <Post message={p.message} likeCounts={p.likeCount} />)

    return (
        <div className={cls.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={cls.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;