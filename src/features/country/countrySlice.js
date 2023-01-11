import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SEARCH_URL = 'https://restcountries.com/v3.1/name/';

const initialState = {
  country: [],
  isLoading: true,
};

export const getCountry = createAsyncThunk(
  'country/getCountry',
  async (id, thunkAPI) => {
    try {
      if (id) {
        const resp = await axios(`${SEARCH_URL}${id}`);
        console.log(resp.data[0]);
        return resp.data[0];
      }
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
