import Auth from "./authReducer";
import Questions from "./questionReducer";
import { combineReducers } from "redux";

export default combineReducers({Auth,Questions})
