import {createStore} from "redux"
import {createAction, createReducer, createSlice} from "@reduxjs/toolkit"

//Action Types
const BUGS_ADDED = "createBugs";
const BUGS_REMOVED = "removeBugs";
const BUGS_RESOLVED = "resolvedBugs";

export const createBugAction = createAction(BUGS_ADDED)
export const updateBugAction = createAction(BUGS_RESOLVED)
export const removeBugAction = createAction(BUGS_REMOVED)

//Action Creators
//
// export const createBug = description =>(
//     {
//         type : BUGS_ADDED,
//         payload : {
//             description
//         }
//     }
// )
//
// export const updateBug = id =>(
//     {
//         type : BUGS_RESOLVED,
//         payload : {
//             id
//         }
//     }
// )
//
// export const deleteBug = id =>(
//     {
//         type : BUGS_REMOVED,
//         payload : {
//            id
//         }
//     }
// )

let lastId = 1;

// const slice = createSlice({
//     name: "bugs",
//     initialState: [],
//     reducers: {
//         createBugs: (bug, action) => {
//             bug.push({
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             )
//         },
//         updateBugAction: (bug, action) => {
//             const foundBug = bug.findIndex(bugs => bugs.id === action.payload.id);
//             bug[foundBug].resolved = true;
//         }
//
//     }
// })
//
// console.log( slice)
export default createReducer([], {
    [createBugAction.type]: (bug, action) => {
        bug.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        )

    },
    [updateBugAction.type]: (bug, action) => {
        const foundBug = bug.findIndex(bugs => bugs.id === action.payload.id);
        bug[foundBug] .resolved = true;
    }
})


//Reducers
// export function bugReducers(state = [], action) {
//     if (action.type === createBugAction.type) {
//         return [
//             ...state,
//             {
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: false
//             }
//         ];
//     } else if (action.type === removeBugAction.type) {
//         return state.filter(bugs => bugs.id !== action.payload.id);
//     } else if (action.type === updateBugAction.type) {
//         return state.map(bugs => bugs.id !== action.payload.id ? bugs : {...bugs, resolved: true});
//     } else return state;
// }


//stores

