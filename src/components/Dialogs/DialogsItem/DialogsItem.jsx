import React from "react";
import cls from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id;
    let image = props.imgUrl
    return (

        <div className={cls.dialogsItem}>
            <NavLink to={path} activeClassName={cls.active}>
                    <img className={cls.dialogsItem_img} src={image} alt=""/>
                {props.name} </NavLink>
        </div>
    )
}


export default DialogsItem;