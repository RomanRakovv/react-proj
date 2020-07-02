import {profileAPI} from "../components/API/api";
import {photosType, postsDataType, profileType} from "../Types/types";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const SET_STATUS_USER = 'SET_STATUS_USER';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
    postsData: [
        {id: 1, message: 'Ведро с болтами', likeCount: 23},
        {id: 2, message: 'Машина мечты', likeCount: 100},
    ] as Array<postsDataType>,
    profile: null as profileType | null,
    status: '',
}
export type initialStateType = typeof initialState

let profileReducer = (state = initialState, action:any):initialStateType => {
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
                profile: {...state.profile, photos: action.photos} as profileType
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText:string):addPostActionCreatorType => ({type: ADD_POST, newPostText})
type addPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText:string
}
export const deletePost = (postId:number):deletePostType => ({type: DELETE_POST, postId})
type deletePostType = {
    type: typeof DELETE_POST,
    postId:number
}
const setProfileUser = (profile:profileType):setProfileUserType => ({type: SET_PROFILE_USER, profile})
type setProfileUserType = {
    type: typeof SET_PROFILE_USER,
    profile: profileType
}
const setStatusUser = (status:string):setStatusUserType => ({type: SET_STATUS_USER, status})
type setStatusUserType = {
    type: typeof SET_STATUS_USER,
    status:string
}
const savePhotoSuccess = (photos:photosType):savePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})
type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos:photosType
}

export const getProfile = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfileUser(response.data))
}

export const getStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusUser(response.data))
}

export const updateStatus = (status:string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status || '')
    if (response.data.resultCode === 0) {
        dispatch(setStatusUser(status))
    }
}

export const savePhoto = (file: any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export default profileReducer;


