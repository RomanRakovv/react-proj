import {authAPI, securityAPI} from "../components/API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

export type initialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null,
}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

let authReducer = (state = initialState, action: any): initialStateType => {
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

type setAuthUserDataActionPayloadType = {
    id: number|null
    email: string|null
    login: string|null
    isAuth: boolean
}

type setAuthUserType = {
    type: typeof SET_AUTH_USER,
    payload: setAuthUserDataActionPayloadType
}

export const setAuthUser = (id: number|null, email: string|null, login: string|null, isAuth: boolean): setAuthUserType => ({
    type: SET_AUTH_USER,
    payload: {id, email, login, isAuth}
})

type getCaptchaUrlSuccessActionPayloadType = {
    captchaUrl:string
}
type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL
    payload: getCaptchaUrlSuccessActionPayloadType
}

export const getCaptchaUrlSuccess = (captchaUrl:string):getCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL, payload: {captchaUrl}})

export const getAuthData = () => async (dispatch:any) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUser(id, email, login, true))
    }
}

export const login = (email:string, password:string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const getCaptchaUrl = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch:any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false))
    }
}

export default authReducer;


