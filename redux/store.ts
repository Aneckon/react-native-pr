import {configureStore} from '@reduxjs/toolkit';
import {dayApi} from './services/daySlice';

export const store = configureStore({
  reducer: {
    [dayApi.reducerPath]: dayApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(dayApi.middleware),
});
