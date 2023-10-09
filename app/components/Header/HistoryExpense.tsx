'use client'

import { RootState } from '@/app/GlobalRedux/store';
import HistoryLayout from '@/app/HistoryLayout';
import { useSelector } from 'react-redux';



export default function HistoryExpense() {
    const expenses_state = useSelector((state: RootState) => state.expenses.expenses);
    const expense = expenses_state.filter(item => item.amount < 0)
    const sortedExpenses = expense.slice().sort((a, b) => a.amount - b.amount);



    
    return (
        <aside className=' w-[400px] mt-10 mb-3'>
            <HistoryLayout expenses={sortedExpenses} />
        </aside>
    )
}

