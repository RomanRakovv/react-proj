import React from "react";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


class Profile extends React.Component{
    render() {
        return (
            <div>
                <ProfileInfoContainer {...this.props} isOwner={this.props.isOwner}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

export default Profile;