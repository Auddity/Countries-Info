import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/all';

const initialState = {
  countries: [],
  isLoading: true,
};

export const getCountries = createAsyncThunk(
  'home/getCountries',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(URL);
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Error: ${error.response}`);
    }
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  // reducer: {},
  extraReducers: {
    [getCountries.pending]: state => {
      state.isLoading = true;
    },
    [getCountries.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(action);
      state.countries = action.payload;
    },
    [getCountries.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export default homeSlice.reducer;
