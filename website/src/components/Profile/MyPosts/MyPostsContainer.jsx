import s from './MyPosts.module.css';
import React from 'react';
import MyPosts from "./MyPosts";
import {addNewPostActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (text) => {
                        let action = addNewPostActionCreator(text);
                        store.dispatch(action);
                    }

                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>

    )
}
export default MyPostsContainer;