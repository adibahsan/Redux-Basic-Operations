import {createStore} from "redux"

//Action Types
const BUGS_ADDED = "createBugs";
const BUGS_REMOVED = "removeBugs";
const BUGS_RESOLVED = "resolvedBugs";

//Action Creators

export const createBug = description =>(
    {
        type : BUGS_ADDED,
        payload : {
            description
        }
    }
)

export const updateBug = id =>(
    {
        type : BUGS_RESOLVED,
        payload : {
            id
        }
    }
)

export const deleteBug = id =>(
    {
        type : BUGS_REMOVED,
        payload : {
           id
        }
    }
)

let lastId = 1;


//Reducers
export function bugReducers(state =[], action) {
    if(action.type===BUGS_ADDED){
        return [
            ...state,
            {
                id:++lastId,
                description : action.payload.description,
                resolved : false
            }
        ];
    }

    else if (action.type===BUGS_REMOVED){
        return state.filter(bugs => bugs.id !== action.payload.id);
    }

    else if (action.type===BUGS_RESOLVED) {
        return state.map(bugs => bugs.id !== action.payload.id ? bugs : {...bugs, resolved: true});
    }
    else return state;
}


//stores

