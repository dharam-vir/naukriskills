import {configureStore} from "@reduxjs/toolkit";
<<<<<<< HEAD
=======

>>>>>>> ef5733c (Initial commit)
import authReducer from '../features/auth/AuthSlice'

export const store = configureStore({
    reducer: {
        auth:authReducer,
    }
})