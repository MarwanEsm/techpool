import { createSlice } from "@reduxjs/toolkit";
import { ICountry } from "@/types/redux";
import { PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
    locations: ICountry[];
}

const initialState: LocationState = {
    locations: [],
};

const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        setLocations: (state, action: PayloadAction<ICountry[]>) => {
            state.locations = action.payload;
        },
    },
});

export const { setLocations } = locationSlice.actions;
export default locationSlice.reducer;