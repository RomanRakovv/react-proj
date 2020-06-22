import React from "react";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


class Profile extends React.Component{
    render() {
        return (
            <div>
                <ProfileInfoContainer {...this.props} />
                <MyPostsContainer/>
            </div>
        )
    }
}

export default Profile;