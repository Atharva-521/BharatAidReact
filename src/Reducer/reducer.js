import { combineReducers } from "@reduxjs/toolkit";

import locationReducer from '../Slices/location';
import authSlice from "../Slices/authSlice";
import resetSlice from "../Slices/resetSlice";

const rootReducer = combineReducers({
    location: locationReducer,
    auth: authSlice,
    reset: resetSlice
})

export default rootReducer;