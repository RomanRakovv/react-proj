import React from "react";
import cls from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post message={p.message} likeCounts={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = {type: 'ADD-POST'};
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }
    return (
        <div className={cls.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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