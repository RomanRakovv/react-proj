import React from "react";
import cls from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogs = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} imgUrl={d.imgUrl}/>)
    let messages = props.messagesData.map(m => <Message message={m.message} id={m.id}/>)


    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={cls.dialogs}>
            <div>
                {dialogs}
            </div>
            <div className={cls.messages}>
                <div>{messages}</div>
            </div>
            <div>
                <textarea placeholder='Введите сообщение...'
                          onChange={onMessageChange}
                          value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={onSendMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;