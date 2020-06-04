import React from "react";
import cls from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let posts = props.postsData.map( p => <Post message={p.message} likeCounts={p.likeCount} />)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={cls.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea placeholder='Оставьте отзыв...'
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={cls.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;