import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../store-context";


const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                if (store == null) {
                    return null
                }
                let state = store.getState().dialogsPage;

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let updateNewMessageText = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }
                return (
                    <Dialogs updateNewMessageText={updateNewMessageText}
                             sendMessage={sendMessage}
                             dialogsData={state.dialogsData}
                             messagesData={state.messagesData}
                             newMessageText={state.newMessageText}/>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;