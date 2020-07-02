import React from "react";
import cls from './Header.module.css'
import {NavLink} from "react-router-dom";

type Props = {
    isAuth: boolean
    login: string
    logout: () => void
}

const Header: React.FC<Props> = ({isAuth, login, logout}) => {
    return (
        <header className={cls.header}>
            <img src="https://listcarbrands.com/wp-content/uploads/2015/10/logo-Toyota.png" alt=""/>
            <div className={cls.loginBlock}>
                {isAuth
                    ? <div>
                        <div>{login}</div>
                        <button onClick={logout}>Logout</button>
                    </div>
                    : <NavLink to={'/Login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;