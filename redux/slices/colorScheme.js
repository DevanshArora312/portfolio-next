import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : "dark"

}

const slice = createSlice({
    name : "colorScheme",
    initialState,
    reducers : {
        setColorScheme : (state,action) => {
            state.theme = action.payload;
        },
        
    }
}) 

export const {setColorScheme} = slice.actions;
export default slice.reducer;