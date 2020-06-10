import React from "react";
import cls from './Users.module.css'
import axios from 'axios'
import userPhoto from './../../assets/images/user.png'



let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
    }
    function onFollow(userId) {
        props.follow(userId)
    }
    function onUnfollow(userId) {
        props.unfollow(userId)
    }
    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img className={cls.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt='Аватарка'/>
                            </div>
                            <div>
                                {
                                    u.followed ? <button onClick={ () => { onUnfollow(u.id) } } >Unfollow</button>
                                    :<button onClick={ () => { onFollow(u.id) } } >Follow</button>
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

export default Users;