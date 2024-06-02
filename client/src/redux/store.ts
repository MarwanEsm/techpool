import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Configure the store
export const store: any = configureStore({
    reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

// Export the store
export default store;
