
let initialState = [
        {id: 1, friendName: 'Andrew'},
        {id: 2, friendName: 'Sasha'},
        {id: 3, friendName: 'Sveta'}
]

export type initialStateType = typeof initialState

let sidebarReducer = (state = initialState, action:any):initialStateType => {
    return [...state]

}

export default sidebarReducer;