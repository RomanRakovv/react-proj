import React from "react";
import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class DialogsContainer extends React.Component {
    render() {
        this.dialogs = this.props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} imgUrl={d.imgUrl}/>)
        this.messages = this.props.messagesData.map(m => <Message message={m.message} id={m.id}/>)
        return <Dialogs dialogs={this.dialogs}
                        messages={this.messages}
                        sendMessage={this.props.sendMessage}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}


export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect,
)(DialogsContainer);