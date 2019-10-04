import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"

const initialState = {};

const Middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...Middleware)
    );

export default store;
