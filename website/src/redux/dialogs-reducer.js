const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = {
                id: 6,
                message: state.newMessageBody,
            };
            state.messages.push(body);
            state.newMessageBody = '';
            break;
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, body: body,
    }
}

export default dialogsReducer;