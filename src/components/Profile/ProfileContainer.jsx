import React from "react";
import {connect} from "react-redux";
import {getProfile, setProfileUser} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId || 8834
        this.props.getProfile(userId)
    }

    render() {
        return (
            <>
                {!this.props.profile ? <Preloader/> :
                <Profile {...this.props}/>}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfileUser, getProfile})(WithUrlDataContainerComponent);