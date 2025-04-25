import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: null,
    userToken: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setUserToken: (state, action) => {
            state.userToken = action.payload;
        },
    },
});

export const { setUserData, setUserToken } = userSlice.actions;
export default userSlice.reducer;