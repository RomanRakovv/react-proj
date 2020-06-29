import {profileAPI} from "../components/API/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_STATUS_USER = 'SET_STATUS_USER';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile})
const setStatusUser = (status) => ({type: SET_STATUS_USER, status})
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId) => async dispatch => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfileUser(response.data))
}

export const getStatus = (userId) => async dispatch => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusUser(response.data))
}

export const updateStatus = (status) => async dispatch => {
    let response = await profileAPI.updateStatus(status || '')
    if (response.data.resultCode === 0) {
        dispatch(setStatusUser(status))
    }
}

export const savePhoto = (file) => async dispatch => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;


