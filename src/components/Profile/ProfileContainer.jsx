import React from "react";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import cls from './Profile.module.css'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.id || this.props.history.push('/login')
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            let userId = this.props.match.params.userId || this.props.id || this.props.history.push('/login')
            this.props.getProfile(userId)
            this.props.getStatus(userId)
        }
    }

    render() {
        return (
            <>
                {!this.props.profile ? <Preloader/> :
                    <div className={cls.mainProfile}>
                        <Profile {...this.props} isOwner={!this.props.match.params.userId} />
                    </div>}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);