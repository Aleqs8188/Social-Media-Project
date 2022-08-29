import Post from "./Post/Post";
import s from './MyPosts.module.css';
import React, { useState } from 'react';
import useForceUpdate from 'use-force-update';
import {addNewPostActionCreator, addPostActionCreator, clearNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    const forceUpdate = useForceUpdate();
    let postsElements = props.posts .map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostText = props.newPostText;

    let addPost = () => { props.dispatch(addPostActionCreator()); }
    let onPostChange = (e) => {
        let text = e.target.value;
        let action = addNewPostActionCreator(text);
        props.dispatch(action);
    }
    let clearInput = () => {
        let clear = clearNewPostActionCreator();
        props.dispatch(clear)
    }
    let clickHandler = () => {
        addPost();
        clearInput();
        forceUpdate();
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={newPostText}
                              onChange={onPostChange}
                              placeholder={'Enter your text'}/>
                </div>
                <div>
                    <button onClick={clickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>

    )
}

export default MyPosts;