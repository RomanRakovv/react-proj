import React from "react";
import {connect} from "react-redux";
import {followAccept, getUsers, setCurrentPage, unFollowAccept} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> :
                    <Users totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           followAccept={this.props.followAccept}
                           unFollowAccept={this.props.unFollowAccept}
                           isFollowingProgress={this.props.isFollowingProgress}
                    />}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        followAccept,
        unFollowAccept,
    }),
    withAuthRedirect,
)(UsersContainer);
