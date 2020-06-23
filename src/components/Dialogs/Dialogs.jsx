import React from "react";
import cls from './Dialogs.module.css'
import AddMessageForm from "./AddMessageForm";


let Dialogs = (props) => {
    let addNewMessage = (value) =>{
        props.sendMessage(value.newMessageBody);
    }
    return (
        <div className={cls.dialogs}>
            <div>
                {props.dialogs}
            </div>
            <div className={cls.messages}>
                <div>{props.messages}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs;