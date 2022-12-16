import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  selected: '',
};

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
