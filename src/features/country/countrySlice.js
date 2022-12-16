import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SEARCH_URL = 'https://restcountries.com/v3.1/name/';

const initialState = {
  // country: '',
  isLoading: true,
};

export const getCountry = createAsyncThunk(
  'country/getCountry',
  async (_, thunkAPI) => {
    console.log(thunkAPI.getState().form);
    const country = thunkAPI.getState().form.search;
    try {
      const resp = await axios(`${SEARCH_URL}${country}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Error: ${error.response}`);
    }
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  // reducers: {},
  extraReducers: {
    [getCountry.pending]: state => {
      state.isLoading = true;
    },
    [getCountry.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.country = action.payload;
    },
    [getCountry.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.error.message);
    },
  },
});

export default countrySlice.reducer;
