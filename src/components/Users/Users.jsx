import React from "react";
import cls from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'


class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    onFollow = (userId) => {
        this.props.follow(userId)
    }

    onUnfollow = (userId) => {
        this.props.unfollow(userId)
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                        <span>
                            <div>
                                <img className={cls.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                                     alt='Аватарка'/>
                            </div>
                            <div>
                                {
                                    u.followed ? <button onClick={() => {
                                            this.onUnfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.onFollow(u.id)
                                        }}>Follow</button>
                                }
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                {/*<div>{u.location.countryName}</div>*/}
                                {/*<div>{u.location.cityName}</div>*/}
                            </span>
                        </span>
                        </div>
                    )
                }
            </div>
        )
    }


}

export default Users;