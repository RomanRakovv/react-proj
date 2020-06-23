import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {renderField} from "../../common/Forms-controls/Forms-controls";

const maxLength30 = maxLength(30)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'}
                   type={'textarea'}
                   component={renderField}
                   validate={[required, maxLength30]}
                   placeholder={'Оставьте отзыв...'}
            />
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({form: 'newPostText'})(AddNewPostForm)
