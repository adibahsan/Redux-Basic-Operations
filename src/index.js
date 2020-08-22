import {store,createBug,updateBug,deleteBug} from "./store/bugs";

console.log("Hello World!");

const unsubscribe = store.subscribe(
    () =>
    console.log("Redux Operation Executed", store.getState())
)
store.dispatch(
    createBug("Bug1")
)

store.dispatch(
    createBug("Bug2")
)

store.dispatch(
    createBug("Bug3")
)

store.dispatch(
    updateBug(3)
)

store.dispatch(
    deleteBug(4)
)

console.log("state", store.getState() );
