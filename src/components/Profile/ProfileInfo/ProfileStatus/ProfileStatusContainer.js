import React from "react";
import ProfileStatus from "./ProfileStatus";
import {profileAPI} from "../../../API/api";


class ProfileStatusContainer extends React.Component {
    componentDidMount() {
        profileAPI.getStatus(this.props.profile.userId).then(response => {
            this.setState({
                status: response.data
            })
        })
    }

    state = {
        editMode: false,
        status: ''
    }

    activateEditMode = () => {
        this.setState({editMode:true})
}
    deactivateEditMode = () => {
        this.setState({editMode:false})
}
    render() {
        return (
            <ProfileStatus state={this.state}
                           activateEditMode={this.activateEditMode}
                           deactivateEditMode={this.deactivateEditMode}
            />
        )
    }
}

export default ProfileStatusContainer;