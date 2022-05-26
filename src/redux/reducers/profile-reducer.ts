const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {message: "hi gues", likeCount: '12'},
        {message: "hi girls", likeCount: '33'}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '5', message: state.newPostText, likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
        }
        default:
        return state
}}
export const addPostAC = () => {
    {type: ADD_POST}
}
export const updateNewPostTextAC = (text) => {
    {type: UPDATE_NEW_POST_TEXT,
        newText: text}
}

export default profileReducer