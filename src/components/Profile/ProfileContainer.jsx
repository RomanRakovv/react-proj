import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
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

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);