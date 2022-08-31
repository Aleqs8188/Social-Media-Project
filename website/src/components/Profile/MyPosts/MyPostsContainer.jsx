import s from './MyPosts.module.css';
import React from 'react';
import MyPosts from "./MyPosts";
import {addNewPostActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => { props.store.dispatch(addPostActionCreator()); }
    let onPostChange = (text) => {
        let action = addNewPostActionCreator(text);
        props.store.dispatch(action);
    }
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>)
}
export default MyPostsContainer;