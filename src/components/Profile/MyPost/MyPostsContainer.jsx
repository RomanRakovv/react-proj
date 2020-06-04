import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../store-context";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return (
                    <MyPosts postsData={state.postsData}
                             newPostText={state.newPostText}
                             updateNewPostText={onPostChange}
                             addPost={addPost}/>
                )
            }
            }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;