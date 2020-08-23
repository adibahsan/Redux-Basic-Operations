import {configureStore} from "@reduxjs/toolkit"
import createReducer from "./reducers"


export function StoreCreator() {
    return configureStore({
        reducer : createReducer
    });
}

