import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../API/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
            userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
            });
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader /> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       onFollow={this.props.follow}
                       onUnfollow={this.props.unfollow}
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
    }
}


export default connect(mapStateToProps, {   follow, setCurrentPage, setTotalUsersCount,
                                            setUsers, toggleIsFetching, unfollow} )(UsersContainer);
