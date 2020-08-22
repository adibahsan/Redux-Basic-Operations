import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit"
import createReducer from "./bugs";


export function bugStoreCreator() {
    return configureStore({
        reducer : createReducer
    });
}

