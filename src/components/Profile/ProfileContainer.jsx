import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileUser} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {userAPI} from "../API/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 8834
        userAPI.getProfile(userId)
            .then(response => {
                this.props.setProfileUser(response.data)
            });
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

export default connect(mapStateToProps, {setProfileUser})(WithUrlDataContainerComponent);