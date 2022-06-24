import { createSlice } from "@reduxjs/toolkit";

export const ViewerStartModalSlice = createSlice(
    {
        name: "viewerStartModal",
        initialState:{
            countRedux:0,
        },
        reducers:{
            ADD_COUNT : (state) => {
                state.countRedux += 1;
            },
            INITIAL_COUNT : (state) => {
                state.countRedux = 0;
            }
        }
    }
);

export const {
    ADD_COUNT,
    INITIAL_COUNT
} = ViewerStartModalSlice.actions;

export default ViewerStartModalSlice.reducer;