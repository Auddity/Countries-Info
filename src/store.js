import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './features/country/countrySlice';
import homeReducer from './features/home/homeSlice';
import themeReducer from './features/theme/themeSlice';
import formReducer from './features/form/formSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    country: countryReducer,
    form: formReducer,
    theme: themeReducer,
  },
});
