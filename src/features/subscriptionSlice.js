
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const subscribeUser = createAsyncThunk(
  'subscription/subscribeUser', 
   async (subscriptionData, { rejectWithValue })=>{
      try{       
       const responcse = await axios.post('http://localhost:8080/api/v1/subsctiption',subscriptionData);    
       if(responcse.data.error){
        toast.error(responcse.data.error);
       }else{
         toast.success(responcse.data.message);
       }                 
      }catch(error){
        return rejectWithValue(error.response?.data?.message || 'Subscription failed');
      }
  }
);

// ✅ Initial state
const initialState = {
    subscribed: false,
    loading: false,
    error: null,
  };

//slice
const subscriptionSlice = createSlice({
   name:'subscription',
   initialState,
   reducers: {
    resetSubscription (state) {
       state.subscribed = false;
       state.loading = false;
       state.error = null;
    },
   },
   extraReducers: (builder) => {
    builder
    .addCase(subscribeUser.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(subscribeUser.fulfilled, (state, actions) =>{
        state.loading = false;
        state.subscribed =true;
    })
    .addCase(subscribeUser.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    });
   },
});

export const { resetSubscription } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
