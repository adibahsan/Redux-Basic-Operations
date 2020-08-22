import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit"
import {bugReducers} from "./bugs";


export function bugStoreCreator() {
    return configureStore({
        reducer : bugReducers
    });
}

