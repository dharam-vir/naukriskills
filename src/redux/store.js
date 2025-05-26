import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/AuthSlice';
import subscriptionReducer from '../features/subscriptionSlice';

export const store = configureStore({
    reducer: {
        auth:authReducer,
        subscription:subscriptionReducer,
    }
})
