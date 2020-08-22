import {createStore} from "redux";
import {bugReducers} from "./bugs";


export function bugStoreCreator() {
    return createStore(bugReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

