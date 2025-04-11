import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async ({ page = 1, limit = 10 }, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/category/read?page=${page}&limit=${limit}`);
      return res.category;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error');
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    data: [],
    pagination: { page: 1, totalPages: 1, limit: 10, total: 0 },
    loading: false,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.category;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch categories';
      });
  },
});

export const { setPage } = categorySlice.actions;
export default categorySlice.reducer;
