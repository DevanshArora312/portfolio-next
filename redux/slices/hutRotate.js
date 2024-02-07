import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rotation :  [],
    lastX : null,
    speed : 0
}

const slice = createSlice({
    name : "hutRotate",
    initialState,
    reducers : {
        setRotate : (state,action) => {
            state.rotation = action.payload
        },
        setY : (state,action) => {
            state.rotation[1] = action.payload
        },
        setlastX : (state,action) => {
            state.lastX = action.payload
        },
        setSpeed : (state,action) => {
            state.speed = action.payload
        }
        
        
    }
}) 

export const {setRotate,setY,setlastX,setSpeed} = slice.actions;
export default slice.reducer;