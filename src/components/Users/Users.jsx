import React from "react";
import cls from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

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
            <div>
                {
                    props.users.map(u =>
                        <div key={u.id} className={cls.users}>
                        <span>
                            <div>
                                <img className={cls.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                                     alt='Аватарка'/>
                            </div>
                            <div>
                                {
                                    u.followed ? <button onClick={() => {
                                            props.onUnfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.onFollow(u.id)
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
        </div>
    )
}

export default Users;