import { combineReducers } from "@reduxjs/toolkit";

import locationReducer from '../Slices/location';

const rootReducer = combineReducers({
    location: locationReducer,
})

export default rootReducer;