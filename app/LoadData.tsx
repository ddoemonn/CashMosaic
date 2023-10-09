'use client'

import { TExpenses,  } from '@/app/types/Expense'
import { useDispatch } from 'react-redux';
import { setExpenses } from '@/app/GlobalRedux/Features/expenses/expensesSlice';
import { useEffect } from 'react';


export default function LoadData(expenses: TExpenses) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setExpenses(expenses.expenses))
    }, [])
    
        
    return (
        <div>

        </div>
    )
}
