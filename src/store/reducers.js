import projectReducer from "./projects";
import bugReducer from "./bugs"
import {combineReducers} from "redux";

export default combineReducers(
    {
        bug : bugReducer,
        project : projectReducer
    }
)