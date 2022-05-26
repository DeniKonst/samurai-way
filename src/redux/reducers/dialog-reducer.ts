
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

let initialState = {
    dialogs: [
        {id:'1', name: 'Denis'},
        {id: '2', name: 'Olga'},
        {id: '3', name: 'Alisa'},
        {id: '4', name: 'Yana'}
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Hello'},
        {id: '3', message: 'Salut'},
        {id: '4', message: 'Yo'}
    ]
}

const dialogReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            state.newMessageBody = '';
            state.messages.push({id: '6', message: body})
        }
        default:
            return state
    }
}

export const sendMessageAC = () => {
    type: SEND_MESSAGE
}
export const updateNewMessageBodyAC = (body) => {
    type: UPDATE_NEW_MESSAGE_BODY,
        body: body
}


export default dialogReducer