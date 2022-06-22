import { createSlice } from "@reduxjs/toolkit";

export const TemplateSlice = createSlice(
    {
        name:"template",
        initialState:{
            pagination:{
                page:0,
                size:10
            }
        },
        reducers:{
            SET_PAGINATION: (state, actions) =>{
                state.pagination = actions.payload;
            },
        }
    }
);

export const {
    SET_PAGINATION
} = TemplateSlice.actions;

export default TemplateSlice.reducer;