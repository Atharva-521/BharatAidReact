import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    email: ""
}

const resetSlice = createSlice({
    name:  "reset",
    initialState,
    reducers: {
        setEmail : (state, action) => {
            state.email = action.payload;
        }
    }
});

export const  {setEmail} = resetSlice.actions;
export default resetSlice.reducer;