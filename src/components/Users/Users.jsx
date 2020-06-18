import React from "react";
import cls from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let totalPage = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={cls.pages_block}>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? cls.currentPage : cls.pages}
                                     onClick={() => props.onPageChanged(p)}>{p}
                        </span>
                    })
                }
            </div>
            <div className={cls.users}>
                {
                    props.users.map(u =>
                        <div key={u.id} className={cls.user}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img className={cls.userPhoto} src={u.photos.small || userPhoto}
                                         alt='Аватарка'/>
                                </NavLink>

                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "fa82a974-1258-43cd-b3d6-9dcd8a694c8f",
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.onUnfollow(u.id)
                                                }
                                            })}}>Unfollow</button>

                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "fa82a974-1258-43cd-b3d6-9dcd8a694c8f",
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.onFollow(u.id)
                                                }
                                            })}}>Follow</button>
                                }
                            </div>
                        </span>
                            <span>
                            <span>
                                <div className={cls.name}>{u.name}</div>
                                <div className={cls.status}>{u.status}</div>
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
        </div>
    )
}

export default Users;