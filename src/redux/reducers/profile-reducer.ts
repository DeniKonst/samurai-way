const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type PostType = {
    message: string
    likeCount: string
}

export type initialStateType = {
    posts: Array<PostType>,
    newPostText: string
}
let initialState: initialStateType = {
    posts: [
        {message: "hi gues", likeCount: '12'},
        {message: "hi girls", likeCount: '33'}
    ],
    newPostText: ''
}

export const profileReducer = (state:initialStateType = initialState, action: ActionProfileType): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, posts: [...state.posts, {message: state.newPostText, likeCount:'0'}], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            // let stateCopy = {...state}
            // stateCopy.newPostText = action.newText;
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}
export type ActionProfileType = addPostAC | updateNewPostTextAC

export type addPostAC = ReturnType<typeof addPostAC>
export type updateNewPostTextAC = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return {type: ADD_POST} as const
}

export const updateNewPostTextAC = (text:string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

