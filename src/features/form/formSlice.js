import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const REGION_BASE_URL = 'https://restcountries.com/v3.1/region/';

const initialState = {
  search: '',
  selected: '',
};

// export const getRegion = createAsyncThunk(
//   'form/getRegion',
//   async (region, thunkAPI) => {
//     try {
//       const resp = await axios(`${REGION_BASE_URL}${region}`)
//       console.log(resp.data);
//       console.log(thunkAPI.getState());
//       return resp.data
//     } catch (error) {
//       return thunkAPI.rejectWithValue(`An error occured: ${error.response}`);
//     }
//   }
// );

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
  // extraReducers: {
  //   [getRegion.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [getRegion.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     // state.countries = action.payload;

  //   },
  //   [getRegion.rejected]: (state, action) => {
  //     console.log(action);
  //     state.isLoading = false;
  //   },
  // },
});

export const { updateSearch, updateSelected } = formSlice.actions;
export default formSlice.reducer;
