import {profileAPI} from "../components/API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER';

let initialState = {
    postsData: [
        {id: 1, message: 'Ведро с болтами', likeCount: 23},
        {id: 2, message: 'Машина мечты', likeCount: 100},
    ],
    newPostText: '',
    profile: null,
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_PROFILE_USER: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
const setProfileUser = (profile) => ({type: SET_PROFILE_USER, profile })

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setProfileUser(response.data))
            });
    }
}


export default profileReducer;


