import { combineReducers } from "@reduxjs/toolkit";
import candidatesSlice from "./reducers/candidatesSlice";
import locationSlice from "./reducers/locationSlice";


const rootReducer = combineReducers({
    candidates: candidatesSlice,
    locations: locationSlice
})


export default rootReducer;