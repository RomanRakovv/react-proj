import React from "react";
import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


class DialogsContainer extends React.Component {
    componentDidMount() {
        this.dialogs = this.props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} imgUrl={d.imgUrl}/>)
        this.messages = this.props.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    }

    render() {
        return <Dialogs dialogs={this.dialogs}
                        messages={this.messages}
                        updateNewMessageText={this.props.updateNewMessageText}
                        sendMessage={this.props.sendMessage}
                        newMessageText={this.props.newMessageText}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}


export default compose(
    connect(mapStateToProps, {updateNewMessageText, sendMessage})
)(DialogsContainer);