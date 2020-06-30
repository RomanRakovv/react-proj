import {authAPI, securityAPI} from "../components/API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUser = (id, email, login, isAuth) => ({type: SET_AUTH_USER, payload: {id, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL, payload: {captchaUrl}})

export const getAuthData = () => async dispatch => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUser(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async dispatch => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthData())
    } else {
        if (response.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const getCaptchaUrl = () => async dispatch => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async dispatch => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false))
    }
}

export default authReducer;


