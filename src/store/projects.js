import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice(
    {
        name : "project",
        initialState : [],
        reducers:{
            addProject: (projects, action) => {
                projects.push(
                    {
                        id : 1,
                        name : action.payload.name
                    });
            }
        }
    });

console.log("slice project", slice);

export const {addProject} = slice.actions
export  default  slice.reducer