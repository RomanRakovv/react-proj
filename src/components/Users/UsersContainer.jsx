import React from "react";
import {connect} from "react-redux";
import {followAccept, requestUsers, setCurrentPage, unFollowAccept} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getIsFetchingSelector,
    getIsFollowingProgressSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowingProgress: getIsFollowingProgressSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        requestUsers,
        followAccept,
        unFollowAccept,
    }),
    withAuthRedirect,
)(UsersContainer);
