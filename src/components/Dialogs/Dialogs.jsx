import React from "react";
import cls from './Dialogs.module.css'


let Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div>
                {props.dialogs}
            </div>
            <div className={cls.messages}>
                <div>{props.messages}</div>
            </div>
            <div>
                <textarea placeholder='Введите сообщение...'
                          onChange={(e) => props.updateNewMessageText(e.target.value)}
                          value={props.newMessageText}
                />
            </div>
            <div>
                <button onClick={()=>props.sendMessage()}>Add message</button>
            </div>
        </div>
    )

}

export default Dialogs;