import React from "react";
import cls from './Sidebar-friend.module.css'



let SidebarFriend = (props) => {
    return (

            <div key={props.id} className={cls.friendName}>
                {props.friendName}
            </div>

    )
}

export default SidebarFriend;