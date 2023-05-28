import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { userRegisterLoginReducer } from './userReducers';

const reducer = combineReducers({
    userRegisterLogin: userRegisterLoginReducer,
})

const userInfoInLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: sessionStorage.getItem("userInfo")
? JSON.parse(sessionStorage.getItem("userInfo"))
: {}

const INITIAL_STATE = {
    userRegisterLogin: { userInfo: userInfoInLocalStorage }
}

const middleware = [thunk];
const store = createStore(reducer, INITIAL_STATE, applyMiddleware(...middleware))

export default store;
