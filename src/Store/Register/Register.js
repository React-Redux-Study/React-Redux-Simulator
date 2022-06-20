import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice(
    {
        name: "register",
        initialState:{
            mirrorKey:[],
            metaData:[]
        },
        reducers:{

            SET_MIRRORKEY:(state, actions) => {
                state.mirrorKey = [...state.mirrorKey ,String(actions.payload)];
            },

            DELETE_MIRRORKEY:(state, actions) => {
                state.mirrorKey = state.mirrorKey.filter((element) => element !== String(actions.payload) );
            },

            SET_METADATA:(state, actions) =>{
                state.metaData = [...state.metaData ,actions.payload];
            },

            DELETE_METADATA:(state, actions) =>{
                state.metaData = state.metaData.filter((element) => JSON.stringify(element) !== JSON.stringify(actions.payload) );
            }
        }
    }
);

export const {
    SET_MIRRORKEY,
    DELETE_MIRRORKEY,

    SET_METADATA,
    DELETE_METADATA
} = RegisterSlice.actions;

export default RegisterSlice.reducer;
