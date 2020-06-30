import React from "react";
import cls from './Sidebar.module.css'
import SidebarFriend from "./Sidebar-friend/Sidebar-friend";


const Sidebar = (props) => {
    let friends = props.sidebar.map(f => <SidebarFriend key={f.id} id={f.id} friendName={f.friendName}/>)

    return (

        <div className={cls.sidebar}>
            <h2>Friends</h2>
            <div className={cls.friendName}>
                {friends}
            </div>
        </div>
    )
}

export default Sidebar;