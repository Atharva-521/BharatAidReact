import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: 'location',
    initialState:{
        latitude: 0,
        longitude: 0,
        loading: false
    },

    reducers:{
        setLoading: (state,value) => {
            state.loading = value.payload;
        },
        setLatitude: (state, value) => {
            state.latitude = value.payload;
        },
        setLongitude: (state, value) => {
            state.longitude = value.payload;
        }
        
    }
})

export const {setLoading, setLatitude, setLongitude} = locationSlice.actions;
export default locationSlice.reducer;