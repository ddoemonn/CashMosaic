'use client'

import { RootState } from '@/app/GlobalRedux/store';
import HistoryLayout from '@/app/HistoryLayout';
import { useSelector } from 'react-redux';



export default function History() {
    const expenses_state = useSelector((state: RootState) => state.expenses.expenses);



    
    return (
        <section className=' sm:w-[630px]  mt-10 mb-3'>
            <h2 className='text-4xl font-semibold mb-2  '>History</h2>
            <HistoryLayout expenses={expenses_state} />
        </section>
    )
}
