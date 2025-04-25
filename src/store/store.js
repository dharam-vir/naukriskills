import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../utils/UserDataSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
