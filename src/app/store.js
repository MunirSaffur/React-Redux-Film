import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/Filters/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
