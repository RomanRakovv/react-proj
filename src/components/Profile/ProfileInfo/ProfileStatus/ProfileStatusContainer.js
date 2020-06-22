import React from "react";
import ProfileStatus from "./ProfileStatus";


class ProfileStatusContainer extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState(
                {status: this.props.status}
            )
        }
    }

    render() {
        return (
            <ProfileStatus {...this.props}
                           state={this.state}
                           activateEditMode={this.activateEditMode}
                           deactivateEditMode={this.deactivateEditMode}
                           onStatusChange={this.onStatusChange}
            />
        )
    }
}

export default ProfileStatusContainer;