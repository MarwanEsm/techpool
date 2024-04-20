import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";


export const store = configureStore({
    reducer: { rootReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk as any)
})




// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
