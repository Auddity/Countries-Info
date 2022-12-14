import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ALL_URL = 'https://restcountries.com/v3.1/all';
const REGION_BASE_URL = 'https://restcountries.com/v3.1/region/';

const initialState = {
  countries: [],
  isLoading: true,
};

export const getCountries = createAsyncThunk(
  'home/getCountries',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(ALL_URL);
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Error: ${error.response}`);
    }
  }
);

export const getRegion = createAsyncThunk(
  'home/getRegion',
  async (region, thunkAPI) => {
    try {
      // const selected = thunkAPI.updateSelected();
      // console.log(selected);
      console.log(region);
      const resp = await axios(`${REGION_BASE_URL}${region}`);
      console.log(resp.data);
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
      state.countries = action.payload;
    },
    [getCountries.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
    // ^ all, v region
    [getRegion.pending]: state => {
      state.isLoading = true;
    },
    [getRegion.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    },
    [getRegion.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export default homeSlice.reducer;
