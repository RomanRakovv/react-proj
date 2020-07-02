import React from "react";
import cls from './ProfileInfo.module.css'
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusContainerWithHooks";


class ProfileInfo extends React.Component {

    componentDidMount() {
        let str = 0;
        console.log(str);
    }

    render() {
        return (
            <div>
                <h1>{this.props.profile.fullName}</h1>
                <ProfileStatusWithHooks {...this.props} />
                <div className={cls.avatar_image}>
                    <img src={this.props.profile.photos.large || userPhoto} alt={'нету'}/>
                    {this.props.isOwner && <input type={'file'} onChange={this.props.onMainPhotoSelected } />}
                </div>
                <div className={cls.descriptionBlock}>
                    <p>{this.props.profile.aboutMe}</p>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;