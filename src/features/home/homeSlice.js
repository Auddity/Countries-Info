import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  isLoading: true,
};

export const getCountries = createAsyncThunk('home/getCountries', () => {});

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducer: {},
});

export default homeSlice.reducer;
