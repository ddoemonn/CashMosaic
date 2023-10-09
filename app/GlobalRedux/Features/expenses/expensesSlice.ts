'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


import { TExpenses, expense } from '@/app/types/Expense';


const initialState: TExpenses = {
    expenses: [],
}

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<expense>) => {
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        },
        deleteExpense: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload),
            };
        },
        setExpenses: (state, action: PayloadAction<expense[]>) => {
            state.expenses = action.payload;
        },
    },
});


export const { addExpense, deleteExpense, setExpenses } = expensesSlice.actions;

export default expensesSlice.reducer;
