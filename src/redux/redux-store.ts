import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {dialogReducer} from "./reducers/dialog-reducer";
// import sideBarReducer from "./reducers/sideBar-reducer";

 let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
    // sideBarPage: sideBarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)



