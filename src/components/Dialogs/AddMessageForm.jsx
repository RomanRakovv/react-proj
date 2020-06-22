import React from "react";
import {Field, reduxForm} from "redux-form";


let DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Введите сообщение...' name={'newMessageBody'} component={'textarea'}/>
            <button>Add message</button>
        </form>
    )
}

export default reduxForm({form: 'newMessageBody'})(DialogsForm)
