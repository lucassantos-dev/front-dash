import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import sideSlice from './features/sideSlice';
import { apiSlice } from './services/apiSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
		siderbar: sideSlice
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<(typeof store)['getState']>;
export type AppDispatch = (typeof store)['dispatch'];
