import React from "react";
import cls from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div>
                <Post message="Ведро с болтами" likeCounts='23' />
                <Post message="Машина мечты" likeCounts='100' />
            </div>
        </div>
    )
}

export default MyPosts;