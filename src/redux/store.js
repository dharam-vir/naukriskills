import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/AuthSlice';
import subscriptionReducer from '../features/subscriptionSlice';
import jobReducer from '../features/jobs/jobSlice';
import sidebarMenuReducer from '../features/includes/adminLeftMenuSlice';
import resumeReducer from '../features/resumeSlice';

export const store = configureStore({
    reducer: {
        auth:authReducer,
        subscription:subscriptionReducer,
        jobs:jobReducer,
        sidebarMenu: sidebarMenuReducer,
        resume: resumeReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['resume/uploadResume'],
        // Ignore these paths in the state
        ignoredPaths: ['resume.file'],
      },
    }),
    devTools: process.env.NODE_ENV !== 'production',
})
