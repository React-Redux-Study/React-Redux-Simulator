import { configureStore } from "@reduxjs/toolkit";

import LoadingReducer from "./Loading/Loading";
import RegisterReducer from "./Register/Register";
import ErrorModalReducer from "./Modal/ErrorModal";

export default configureStore({
    reducer: {
        loading:LoadingReducer,
        register:RegisterReducer,
        errorModal:ErrorModalReducer,
    }
});