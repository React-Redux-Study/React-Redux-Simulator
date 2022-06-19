import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice(
    {
        name: "register",
        initialState:{
            maxMirrorSize:0,
            mirrorKey:[],
        },
        reducers:{
            SET_MAXMIRRORSIZE:(state, actions)=>{
                state.maxMirrorSize = actions.payload;
            },

            SET_MIRRORKEY:(state, actions) => {
                state.mirrorKey = actions.payload;
            }
        }
    }
);

export const {
    SET_MAXMIRRORSIZE,
    SET_MIRRORKEY
} = RegisterSlice.actions;

export default RegisterSlice.reducer;
