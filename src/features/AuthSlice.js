// src/features/auth/authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

// ✅ Async thunk
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ credentials, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', credentials);
      const { user, token } = response.data;
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
      }
      return { user, token };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

// Logout Thunk
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('http://localhost:8080/api/v1/auth/logout');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return true;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Logout failed');
    }
  }
);


// Async thunk for registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signup', userData);
      if (response.data) {
        const { user, token } = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        return { user, token };
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

//send Forgot Password Email 
export const sendForgotPasswordEmail  = createAsyncThunk(
  'auth/sendForgotPasswordEmail', async({ email }, {rejectWithValue}) => {
     try{
      const response = await axios.post('http://localhost:8080/api/v1/auth/forgot-password', { email });
      toast.success(response?.data?.message || 'Password recovery email sent');
      return response.data;
     }catch(error){
      const errMsg = error.response?.data?.message || 'Failed to send recovery email';
      toast.error(errMsg);
       return rejectWithValue(errMsg);
     }
  }
)

// 🧠 Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    isLoggedIn: !!localStorage.getItem('token'),
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // Login (optional)
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Logout 
    builder
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;

      });

    // Register
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      }).addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      }).addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });

    //sendForgotPasswordEmail 
    builder
    .addCase(sendForgotPasswordEmail.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(sendForgotPasswordEmail.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(sendForgotPasswordEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// ✅ Export actions and reducer

export default authSlice.reducer;
