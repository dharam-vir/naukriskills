import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/AuthSlice';
import subscriptionReducer from '../features/subscriptionSlice';
import jobReducer from '../features/jobs/jobSlice';
import sidebarMenuReducer from '../features/includes/adminLeftMenuSlice';

export const store = configureStore({
    reducer: {
        auth:authReducer,
        subscription:subscriptionReducer,
        jobs:jobReducer,
        sidebarMenu: sidebarMenuReducer,
    }
})
