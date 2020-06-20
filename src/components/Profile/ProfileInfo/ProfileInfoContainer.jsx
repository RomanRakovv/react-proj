import React from "react";
import ProfileInfo from "./ProfileInfo";


class ProfileInfoContainer extends React.Component {
    render() {
        return (
            <ProfileInfo {...this.props}/>
        )
    }
}

export default ProfileInfoContainer;