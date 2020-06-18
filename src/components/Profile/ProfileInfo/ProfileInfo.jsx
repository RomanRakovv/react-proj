import React from "react";
import cls from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <h1>{props.profile.fullName}</h1>
            <div className={cls.avatar_image}>
                <img src={props.profile.photos.large} alt="нету"/>
            </div>
            <div className={cls.descriptionBlock}>
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;