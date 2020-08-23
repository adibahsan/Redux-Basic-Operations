import {createBug,updateBug,deleteBug} from "./store/bugs";

import  {bugStoreCreator} from  "./store/bugStoreCreator"


const store = bugStoreCreator();
console.log("Hello World!");

const unsubscribe = store.subscribe(
    () =>
    console.log("Redux Operation Executed", store.getState())
)
store.dispatch(
    createBug("Bug1","refreshBug1")
)

store.dispatch(
    createBug("Bug2","refreshBug1")
)

store.dispatch(
    createBug("Bug3","refreshBug1")
)

store.dispatch(
    updateBug(store.getState()[0].id)
)
//
// store.dispatch(
//     deleteBug(4)
// )

const {accessToken, refreshToken} = store.getState()[0];

console.log("accessToken", accessToken );
console.log("refreshToken", refreshToken );
