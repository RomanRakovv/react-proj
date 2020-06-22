import React from "react";
import {Field, reduxForm} from "redux-form";


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Оставьте отзыв...'} name={'newPostText'} component={'textarea'}/>
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({form: 'newPostText'})(AddNewPostForm)
