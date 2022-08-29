import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likesCount: '12'},
                {id: '2', message: 'I love this website))', likesCount: '30'},
                {id: '3', message: 'I love this website))', likesCount: '30'},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Konstantin'},
                {id: '2', name: 'Sasha'},
                {id: '3', name: 'Andrey'},
                {id: '4', name: 'Vlad'},
                {id: '5', name: 'Vitalii'},
                {id: '6', name: 'Alex'},
                {id: '7', name: 'Oleg'},
                {id: '8', name: 'Ivan'},
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Hello'},
                {id: '3', message: 'How are you'},
                {id: '4', message: 'Im fine thx'},
                {id: '5', message: 'And you'},
            ],
            newMessageBody: '',
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('Hello');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;