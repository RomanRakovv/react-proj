import React from "react";
import cls from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let posts = props.postsData.map( p => <Post message={p.message} likeCounts={p.likeCount} />)

    let addPost = () => {
        props.dispatch( addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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
                <button onClick={addPost}>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={cls.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;