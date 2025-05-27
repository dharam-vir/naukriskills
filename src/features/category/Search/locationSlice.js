import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCities = createAsyncThunk(
  'location/fetchCities',
  async (query) => {
    const res = await fetch(`https://your-api.com/cities?search=${query}`);
    const data = await res.json();
    return data.cities;
  }
);

const locationSlice = createSlice({
  name: 'location',
  initialState: { cities: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default locationSlice.reducer;
