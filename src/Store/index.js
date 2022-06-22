import { configureStore } from "@reduxjs/toolkit";

import LoadingReducer from "./Loading/Loading";
import RegisterReducer from "./Register/Register";
import ErrorModalReducer from "./Modal/ErrorModal";
import TemplateReducer from "./Template/Template";

export default configureStore({
    reducer: {
        loading:LoadingReducer,
        register:RegisterReducer,
        errorModal:ErrorModalReducer,
        template:TemplateReducer
    }
});