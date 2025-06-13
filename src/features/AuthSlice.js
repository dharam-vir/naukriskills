// src/features/auth/authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

// ✅ Async thunk: Login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ credentials, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/login`, credentials);
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

// ✅ Async thunk: Logout
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get(`${process.env.REACT_APP_API_URL}auth/logout`);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return true;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Logout failed');
    }
  }
);

// ✅ Async thunk: Registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/signup`, userData);
      const { user, token } = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      return { user, token };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

// ✅ Async thunk: Forgot Password
export const sendForgotPasswordEmail = createAsyncThunk(
  'auth/sendForgotPasswordEmail',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/forgot-password`, { email });
      toast.success(response?.data?.message || 'Password recovery email sent');
      return response.data;
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Failed to send recovery email';
      toast.error(errMsg);
      return rejectWithValue(errMsg);
    }
  }
);

// ✅ Async thunk: Change Password
export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ currentPassword, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/change-password`, { currentPassword, newPassword });
      toast.success(response?.data?.message || 'Password changed successfully');
      return response.data;
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Failed to change password';
      toast.error(errMsg);
      return rejectWithValue(errMsg);
    }
  }
);

// ✅ Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    isLoggedIn: !!localStorage.getItem('token'),
    loading: false,
    error: null,
    success: null,  // Added success state
  },
  reducers: {
    resetStatus: (state) => {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔐 Login
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
      })

      // 🔓 Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
      })

      // 📝 Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })

      // 📧 Forgot Password
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
      })

      // 📧 Change Password
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;  // Reset success when changing password
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = 'Password changed successfully';  // Set success message
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ✅ Export reducer
export default authSlice.reducer;
