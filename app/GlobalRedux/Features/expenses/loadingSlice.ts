'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: boolean = false

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoadingTrue: (state) => {
            return true
        },
        setLoadingFalse: (state) => {
            return false
        }
        
    },
});


export const { setLoadingTrue, setLoadingFalse } = loadingSlice.actions;

export default loadingSlice.reducer;
