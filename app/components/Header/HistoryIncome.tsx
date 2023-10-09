'use client'

import { RootState } from '@/app/GlobalRedux/store';
import HistoryLayout from '@/app/HistoryLayout';
import { useSelector } from 'react-redux';



export default function HistoryIncome() {
    const expenses_state = useSelector((state: RootState) => state.expenses.expenses);
    const income = expenses_state.filter(item => item.amount > 0)

    const sortedExpenses = income.slice().sort((a, b) => b.amount - a.amount);

    
    return (
        <section className=' w-[400px] mt-10 mb-3'>
            <HistoryLayout expenses={sortedExpenses} />
        </section>
    )
}
