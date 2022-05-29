const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type initialDialogsStateType = {
    dialogs: Array<DialogType>
    messages:  Array<MessageType>
    newMessageBody: string
}

let initialDialogsState = {
    dialogs: [
        {id: '1', name: 'Denis'},
        {id: '2', name: 'Olga'},
        {id: '3', name: 'Alisa'},
        {id: '4', name: 'Yana'}
    ],
    messages: [
        {id: '11', message: 'Hi'},
        {id: '12', message: 'Hello'},
        {id: '13', message: 'Salut'},
        {id: '14', message: 'Yo'}
    ],
    newMessageBody: ''
}

export const dialogReducer = (state:initialDialogsStateType = initialDialogsState, action: ActionDialogsType):initialDialogsStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return {...state, newMessageBody: action.body}
        }
        
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {...state, messages: [...state.messages, {id:'4545', message: body}], newMessageBody: ''}
        }
        default:
            return state
    }
 
}
 type ActionDialogsType = ActionSendType | ActionUpdateType

type ActionSendType = ReturnType<typeof sendMessageAC>
type ActionUpdateType = ReturnType<typeof updateNewMessageBodyAC>


export const updateNewMessageBodyAC = (body:string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {type: SEND_MESSAGE} as const
}


