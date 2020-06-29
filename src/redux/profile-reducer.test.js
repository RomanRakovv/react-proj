import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    postsData: [
        {id: 1, message: 'Ведро с болтами', likeCount: 23},
        {id: 2, message: 'Машина мечты', likeCount: 100},
    ]
}

test('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator('Привет всем')

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(3)
});

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('Привет всем')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData[2].message).toBe('Привет всем')
});

test('post should be deleted', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(1)
});

