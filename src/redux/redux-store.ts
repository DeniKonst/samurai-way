import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogReducer from "./reducers/dialog-reducer";
import sideBarReducer from "./reducers/sideBar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBarPage: sideBarReducer,
})

let store = createStore(reducers)



export default store