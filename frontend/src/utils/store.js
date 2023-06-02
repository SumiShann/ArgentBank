import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/tokenReducer";
import profileReducer from "../features/profileReducer";
import usernameReducer from "../features/usernameReducer";

export default configureStore({
    reducer:{
        auth: tokenReducer,
        profile: profileReducer,
        user: usernameReducer,
    }
});