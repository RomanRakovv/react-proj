import React from "react";
import cls from './../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={cls.messages}>
            {props.message}
        </div>
    )
}


export default Message;