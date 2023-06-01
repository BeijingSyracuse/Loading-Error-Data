import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import { combineReducers } from "redux";

const store = createStore(combineReducers({ reducer }), applyMiddleware(thunk));

export default store;
