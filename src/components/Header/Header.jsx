import React from "react";
import cls from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={cls.header}>
            <img src="https://listcarbrands.com/wp-content/uploads/2015/10/logo-Toyota.png" alt=""/>
            <div className={cls.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}</div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;