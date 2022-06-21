import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice(
    {
        name: "register",
        initialState:{
            mirrorKeyRedux:[],
            metaDataRedux:[]
        },
        reducers:{

            SET_MIRRORKEY:(state, actions) => {
                state.mirrorKeyRedux = [...state.mirrorKeyRedux ,String(actions.payload)];
            },

            DELETE_MIRRORKEY:(state, actions) => {
                state.mirrorKeyRedux = state.mirrorKeyRedux.filter((element) => element !== String(actions.payload) );
            },

            SET_METADATA:(state, actions) =>{
                state.metaDataRedux = [...state.metaDataRedux ,actions.payload];
            },

            DELETE_METADATA:(state, actions) =>{
                state.metaDataRedux = state.metaDataRedux.filter((element) => JSON.stringify(element) !== JSON.stringify(actions.payload) );
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
