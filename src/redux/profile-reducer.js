import {profileAPI} from "../components/API/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_STATUS_USER = 'SET_STATUS_USER';

let initialState = {
    postsData: [
        {id: 1, message: 'Ведро с болтами', likeCount: 23},
        {id: 2, message: 'Машина мечты', likeCount: 100},
    ],
    profile: null,
    status: '',
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        }
        case SET_PROFILE_USER: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS_USER: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile })
const setStatusUser = (status) => ({type: SET_STATUS_USER, status })

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setProfileUser(response.data))
            });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatusUser(response.data))
            });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status || '')
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusUser(status))
                }
            });
    }
}

export default profileReducer;


