import { combineReducers } from "@reduxjs/toolkit";

import locationReducer from '../Slices/location';
import authSlice from "../Slices/authSlice";

const rootReducer = combineReducers({
    location: locationReducer,
    auth: authSlice,
})

export default rootReducer;