import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {savePhoto} from "../../../redux/profile-reducer";


class ProfileInfoContainer extends React.Component {

    onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            this.props.savePhoto(e.target.files[0])
        }
    }

    render() {
        return (
            <ProfileInfo {...this.props}
                         isOwner={this.props.isOwner}
                         onMainPhotoSelected={this.onMainPhotoSelected}
            />
        )
    }
}

export default connect(null, {savePhoto})(ProfileInfoContainer);