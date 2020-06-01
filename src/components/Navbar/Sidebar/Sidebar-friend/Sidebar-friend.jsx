import React from "react";
import cls from './Sidebar-friend.module.css'



let SidebarFriend = (props) => {
    return (

            <div className={cls.friendName}>
                {props.friendName}
            </div>

    )
}

export default SidebarFriend;