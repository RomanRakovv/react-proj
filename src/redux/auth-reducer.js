import {authAPI} from "../components/API/api";

const SET_AUTH_USER = 'SET_AUTH_USER';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const setAuthUser = (id, email, login, isAuth) => ({type: SET_AUTH_USER, payload: {id, email, login, isAuth}})

export const getAuthData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUser(id, email, login, true))
                }
            });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthData())
                }
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUser(null, null, null , false))
                }
            });
    }
}


export default authReducer;


