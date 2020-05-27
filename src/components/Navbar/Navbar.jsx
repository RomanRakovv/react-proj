import React from "react";
import cls from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <NavLink to="/profile" activeClassName={cls.activeLink}>Profile</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to="/dialogs" activeClassName={cls.activeLink}>Messages</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to="/news" activeClassName={cls.activeLink}>News</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to="/music" activeClassName={cls.activeLink}>Music</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to="/settings" activeClassName={cls.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;