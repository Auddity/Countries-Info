import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  selected: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateSearch: state => {},
    updateSelected: state => {},
  },
});

export const { updateSearch, updateSelected } = formSlice.actions;
export default formSlice.reducer;
