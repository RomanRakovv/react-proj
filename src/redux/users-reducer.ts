import {followAPI, userAPI} from "../components/API/api";
import {usersType} from "../Types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLOWING_PROGRESS = 'TOGGLE_IS_FOLOWING_PROGRESS';



let initialState = {
    users: [] as Array<usersType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [] as Array<number>, //array of users ids
}

export type initialStateType = typeof initialState

let usersReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}


const followSuccess = (userId:number):followSuccessType => ({type: FOLLOW, userId})
type followSuccessType = {
    type: typeof FOLLOW,
    userId:number
}
const unfollowSuccess = (userId:number): unfollowSuccessType => ({type: UNFOLLOW, userId})
type unfollowSuccessType = {
    type: typeof UNFOLLOW,
    userId: number
}
const setUsers = (users: Array<usersType>): setUsersType => ({type: SET_USERS, users})
type setUsersType = {
    type: typeof SET_USERS,
    users: Array<usersType>
}
const setTotalUsersCount = (totalCount:number): setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number
}
export const setCurrentPage = (pageNumber:number): setCurrentPageType => ({type: SET_CURRENT_PAGE, pageNumber})
type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    pageNumber: number
}
const toggleIsFetching = (isFetching:boolean):toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
const toggleIsFollowingProgress = (isFetching:boolean, userId:number): toggleIsFollowingProgressType => ({
    type: TOGGLE_IS_FOLOWING_PROGRESS,
    isFetching,
    userId
})
type toggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}


export const requestUsers = (currentPage:number, pageSize:number) => async (dispatch:any) => {
    dispatch(toggleIsFetching(true))
    let response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const followAccept = (userId:number) => async (dispatch:any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await followAPI.userFollow(userId)
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const unFollowAccept = (userId:number) => async (dispatch:any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await followAPI.userUnfollow(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}


export default usersReducer;


