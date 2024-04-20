import { createSlice } from '@reduxjs/toolkit'

const candidatesSlice = createSlice({
    name: "candidatesSlice",
    initialState: {
        searched_title: ""
    },
    reducers: {
        setSearchedTitle: (state, actions) => {
            state.searched_title = actions.payload
        }
    }
})


export const { setSearchedTitle } = candidatesSlice.actions

export default candidatesSlice.reducer
