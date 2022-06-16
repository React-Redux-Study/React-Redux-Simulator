import { configureStore } from "@reduxjs/toolkit";

import LoadingReducer from "./Loading/Loading";

export default configureStore({
    reducer: {
        loading:LoadingReducer,
    }
});