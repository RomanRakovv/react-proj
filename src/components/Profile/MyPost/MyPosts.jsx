import React from "react";
import cls from './MyPosts.module.css'
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm";


const MyPosts = (props) => {
    let posts = props.postsData.map( p => <Post message={p.message} likeCounts={p.likeCount} />)

    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    }
    return (
        <div className={cls.postsBlock}>
            <h3>My post</h3>
            <div>
                <AddNewPostForm onSubmit={addNewPost}/>
            </div>
            <div className={cls.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;