import React from "react";
import cls from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return (
        <div className={cls.content}>
            <div>
                <img src="https://a.d-cd.net/547c385s-960.jpg" alt=""/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;