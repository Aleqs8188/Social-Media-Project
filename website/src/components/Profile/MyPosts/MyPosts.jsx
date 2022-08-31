import Post from "./Post/Post";
import s from './MyPosts.module.css';
import React from 'react';

const MyPosts = (props) => {
    let postsElements = props.posts .map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostText = props.newPostText;

    let onAddPost = () => { props.addPost(); }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;