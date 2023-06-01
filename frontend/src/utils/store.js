import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/tokenReducer";
import profileReducer from "../features/tokenReducer";

export default configureStore({
    reducer:{
        auth: tokenReducer,
        profile: profileReducer,
    }
});