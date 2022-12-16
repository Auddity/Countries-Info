import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const SEARCH_URL = 'https://restcountries.com/v3.1/name/';

const initialState = {
  country: '',
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  // reducers: {},
  extraReducers: {},
});

export default countrySlice.reducer;
