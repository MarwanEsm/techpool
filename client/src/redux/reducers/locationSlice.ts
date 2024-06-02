import { createSlice } from "@reduxjs/toolkit";
import { ICountry, ISelectedLocation } from "@/types/location";
import { ILocationState } from "@/types/location";
import { PayloadAction } from "@reduxjs/toolkit";



const initialState: ILocationState = {
    locations: [],
    selectedLocation: { value: "", label: "" }
};

const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        setLocations: (state, action: PayloadAction<ICountry[]>) => {
            state.locations = action.payload;
        },
        setSelectedLocation: (state, action) => {
            state.selectedLocation = action.payload
        }
    },
});

export const { setLocations, setSelectedLocation } = locationSlice.actions;
export default locationSlice.reducer;