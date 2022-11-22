import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './features/country/countrySlice';
import homeReducer from './features/home/homeSlice';
import themeReducer from './features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    country: countryReducer,
    theme: themeReducer,
  },
});
