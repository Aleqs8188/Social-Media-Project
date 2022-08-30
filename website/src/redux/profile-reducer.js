const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const CLEAR_POST_INPUT = 'CLEAR_POST_INPUT'

let initialState = {
    posts: [
        {id: '1', message: 'Hi, how are you?', likesCount: '12'},
        {id: '2', message: 'I love this website))', likesCount: '30'},
        {id: '3', message: 'I love this website))', likesCount: '30'},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 1
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case CLEAR_POST_INPUT:
            state.newPostText = '';
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const addNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text,
    }
}
export const clearNewPostActionCreator = () => ({
    type: CLEAR_POST_INPUT
})

export default profileReducer;