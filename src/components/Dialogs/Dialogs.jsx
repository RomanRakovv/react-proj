import React from "react";
import cls from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} imgUrl={d.imgUrl}/>)
    let messages = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>)


    let sendMessage = () => {
        props.dispatch( sendMessageActionCreator() );
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch( updateNewMessageTextActionCreator(text) );
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
                          value={props.dialogsPage.newMessageText}/>
            </div>
            <div>
                <button onClick={sendMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;