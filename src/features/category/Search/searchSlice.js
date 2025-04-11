import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Corrected name: fetchSearch
export const fetchSearch = createAsyncThunk('search/fetchSearch', async (searchTerm) => {
    const response = await fetch(`http://localhost:8080/api/v1/category?search=${searchTerm}`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }

    const data = await response.json();
    return data.categories;
});

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        loading: false,
        items: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default searchSlice.reducer;
