import React from "react";
import cls from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={cls.avatar_image}>
                <img src="https://a.d-cd.net/547c385s-960.jpg" alt=""/>
            </div>
            <div className={cls.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;