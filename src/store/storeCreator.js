import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit"
import createReducer from "./projects";


export function StoreCreator() {
    return configureStore({
        reducer : createReducer
    });
}

