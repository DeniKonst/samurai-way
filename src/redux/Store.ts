import { dialogReducer } from "./reducers/dialog-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import sideBarReducer from "./reducers/sideBar-reducer";

//
// let Store: any = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {message: "hi gues", likeCount: '12'},
//                 {message: "hi girls", likeCount: '33'}
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id:'1', name: 'Denis'},
//                 {id: '2', name: 'Olga'},
//                 {id: '3', name: 'Alisa'},
//                 {id: '4', name: 'Yana'}
//             ],
//             messages: [
//                 {id: '1', message: 'Hi'},
//                 {id: '2', message: 'Hello'},
//                 {id: '3', message: 'Salut'},
//                 {id: '4', message: 'Yo'}
//             ]
//         },
//         sideBarPage: {}
//     },
//     _callSubscriber() {this._state},
//     getState() {this._state},
//     subscribe(observer: any) {},
//     dicpath(action: any) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
//         this._state.sideBarPage = sideBarReducer(this._state.sideBarPage, action)
//
//         this._callSubscriber(this._state)
//     }
// }
//
// export default Store
