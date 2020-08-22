import {createStore} from "redux"

//Action Types
const BUGS_ADDED = "createBugs";
const BUGS_REMOVED = "removeBugs";
const BUGS_RESOLVED = "resolvedBugs";

let lastId = 1;


//Reducers
export function bugReducers(state, action) {
    if(action.type===BUGS_ADDED){
        return[
            ...state,
            {
                id:++lastId,
                description : action.payload.description,
                resolved : false
            }
        ];
    }

    else if (action.type==BUGS_REMOVED){
        return state.filter(bugs => bugs.id != action.payload.id);
    }

    else if (action.type==BUGS_RESOLVED) {
        return state.map(bugs => bugs.id != action.payload.id ? bugs : {...bugs, resolved: true});
    }
    else return state;
}


//stores
export const store = createStore(bugReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

