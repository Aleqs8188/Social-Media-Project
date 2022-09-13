const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let body = {
                id: 6,
                message: state.newMessageBody,
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(body);
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, body: body,
    }
}

export default dialogsReducer;