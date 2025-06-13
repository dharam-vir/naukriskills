import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import axios from "axios";

// Async thunk to upload resume to API
export const uploadResumeToApi = createAsyncThunk(
  'resume/uploadResumeToApi',
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('resume', file);     
    //   const response = await axios.post('/api/upload-resume', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });

      return 'Dharam vir';
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Upload failed');
    }
  }
);

// Thunk to download resume
export const downloadResumeFromApi = createAsyncThunk(
  'resume/downloadResumeFromApi',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/resume/download/${userId}`);
      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'resume.pdf'; // Adjust filename if needed
      document.body.appendChild(a);
      a.click();
      a.remove();
      toast.success('Resume downloaded successfully.');
    } catch (err) {
      toast.error(err.message || 'Failed to download');
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  file: null,
  uploading: false,
  error: null,
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    uploadResume: (state, action) => {
      state.file = action.payload;
      state.error = null;
    },
    removeResume: (state) => {
      state.file = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadResumeToApi.pending, (state) => {
        state.uploading = true;
        state.error = null;
      })
      .addCase(uploadResumeToApi.fulfilled, (state, action) => {
        state.uploading = false;
        // state.responce = action.payload.response;
        state.file = action.payload.file || state.file;
      })
      .addCase(uploadResumeToApi.rejected, (state, action) => {
        state.uploading = false;
        state.error = action.payload;
      })
      .addCase(downloadResumeFromApi.pending, (state) => {
        state.status = 'downloading';
      })
      .addCase(downloadResumeFromApi.fulfilled, (state) => {
        state.status = 'downloaded';
      })
      .addCase(downloadResumeFromApi.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { uploadResume, removeResume } = resumeSlice.actions;
export default resumeSlice.reducer;
