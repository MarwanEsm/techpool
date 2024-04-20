import { combineReducers } from "@reduxjs/toolkit";
import candidatesSlice from "./reducers/candidatesSlice";


const rootReducer = combineReducers({
    candidates: candidatesSlice
})


export default rootReducer;