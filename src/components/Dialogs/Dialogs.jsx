import React from "react";
import cls from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={cls.dialog + ' ' + cls.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItem}>
                <DialogItem name='Гена' id='1' />
                <DialogItem name='Женя' id='2' />
                <DialogItem name='Рома' id='3' />
                <DialogItem name='Света' id='4' />
                <DialogItem name='Марат' id='5' />
            </div>
            <div className={cls.messages}>
                <Message message='Privet' />
                <Message message='займи сотку' />
                <Message message='как дела?' />
            </div>
        </div>
    )
}

export default Dialogs;