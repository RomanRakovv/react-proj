import React from "react";
import cls from './Profile.module.css'

const Profile = () => {
    return (
        <div className={cls.content}>
            <div>
                <img src="https://clck.ru/Ndbn3" alt=""/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
            </div>
            <div>
                Post 1
            </div>
            <div>
                Post 2
            </div>
        </div>
    )
}

export default Profile;