import React from "react";
import {Field, reduxForm} from 'redux-form'
import {renderField} from "../common/Forms-controls/Forms-controls";
import {email, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import cls from './../common/Forms-controls/Forms-controls.module.css'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={renderField}
                       typeField={'input'}
                       validate={[required, email]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={renderField}
                       typeField={'input'}
                       type={'password'}
                       validate={[required,]}
                />
            </div>
            <div>
                <Field component={'input'}
                       name={'rememberMe'}
                       type={'checkbox'}/> Remember me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field placeholder={'Введите символы с картинки'}
                                        name={'captcha'}
                                        component={renderField}
                                        typeField={'input'}
                                        validate={[required]}/>}
            {props.error &&
            <div className={cls.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let Login = (props) => {
    let onSubmit = (value) => {
        props.login(value.email, value.password, value.rememberMe, value.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, {login})(Login);