import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const REGION_BASE_URL = 'https://restcountries.com/v3.1/region/';

const initialState = {
  search: '',
  selected: '',
};

export const getRegion = createAsyncThunk(
  'form/getRegion',
  async (_, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(`An error occured: ${error.response}`);
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    updateSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { updateSearch, updateSelected } = formSlice.actions;
export default formSlice.reducer;
