import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../common/Forms-controls/Forms-controls";
import {maxLength, required} from "../../utils/validators/validators";

const maxLength10 = maxLength(10)
let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type={'input'}
                   placeholder='Введите сообщение...'
                   name={'newMessageBody'}
                   component={renderField}
                   validate={[required, maxLength10]}
            />
            <button>Add message</button>
        </form>
    )
}

export default reduxForm({form: 'newMessageBody'})(AddMessageForm)
