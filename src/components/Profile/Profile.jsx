import React from "react";
import cls from './Profile.module.css'
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}

export default Profile;