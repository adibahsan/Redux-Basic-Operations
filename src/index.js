import * as Bugs from "./store/bugs";
import * as Project from "./store/projects"

import  {StoreCreator} from "./store/storeCreator"


const store = StoreCreator();

store.dispatch(
    Project.addProject({name : "Project1"})
)
console.log("Hello World!");

const unsubscribe = store.subscribe(
    () =>
    console.log("Redux Operation Executed After Toolkit Actions", store.getState())
)
store.dispatch(
    Bugs.createBugAction({description: "Bug1"})
)

store.dispatch(
    Bugs.createBugAction({description: "Bug2"}))

store.dispatch(
    Bugs.createBugAction({description: "Bug13"}))

store.dispatch(
    Bugs.updateBugAction({id : 2})
)

// store.dispatch(
//     Bugs.removeBugAction({id : 4})
// )

// console.log("state", store.getState() );
