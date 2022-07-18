import Auth from "./authReducer";
import Questions from "./questionReducer";
import { combineReducers } from "redux";

const root = combineReducers({
    Auth,
    Questions
})
export default root