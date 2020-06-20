import React from "react";
import cls from './ProfileInfo.module.css'
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";


class ProfileInfo extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.profile.fullName}</h1>
                <ProfileStatusContainer {...this.props}/>
                <div className={cls.avatar_image}>
                    <img src={this.props.profile.photos.large || userPhoto} alt="нету"/>
                </div>
                <div className={cls.descriptionBlock}>
                    <p>{this.props.profile.aboutMe}</p>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;