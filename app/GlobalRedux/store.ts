'use client';

import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './Features/expenses/expensesSlice';
import loadingReducer from './Features/expenses/loadingSlice'

export const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        loading: loadingReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;