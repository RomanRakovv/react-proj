import React from "react";
import cls from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogsData.map( d => <DialogsItem name={d.name} id={d.id} imgUrl={d.imgUrl}/>)
    let messages = props.dialogsPage.messagesData.map( m => <Message message={m.message} id={m.id} />)
    let newMessageElem = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElem.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={cls.dialogs}>
            <div>
                {dialogs}
            </div>
            <div className={cls.messages}>
                { messages }
            </div>
            <textarea onChange={onMessageChange} ref={newMessageElem} value={props.dialogsPage.newMessageText}/>
            <button onClick={addMessage}>Add message</button>
        </div>
    )
}

export default Dialogs;