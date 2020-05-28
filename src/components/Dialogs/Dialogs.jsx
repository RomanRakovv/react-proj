import React from "react";
import cls from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = props.dialogsData.map( d => <DialogsItem name={d.name} id={d.id} />)
    let messages = props.messagesData.map( m => <Message message={m.message} id={m.id} />)

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItem}>
                {dialogs}
            </div>
            <div className={cls.messages}>
                { messages }
            </div>
        </div>
    )
}

export default Dialogs;