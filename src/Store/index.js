import { configureStore } from "@reduxjs/toolkit";

import LoadingReducer from "./Loading/Loading";
import RegisterReducer from "./Register/Register";

export default configureStore({
    reducer: {
        loading:LoadingReducer,
        register:RegisterReducer
    }
});