'use client'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';

export default function Header() {
    const dispatch = useDispatch();
    const expenses_state = useSelector((state: RootState) => state.expenses.expenses);
    
    const balance = expenses_state.reduce((acc, expense) => acc + expense.amount, 0);
    const income = expenses_state.reduce((acc, expense) => {
        if(expense.amount > 0){
            return acc + expense.amount
        }

        return acc
        
    }, 0);

    const expense = expenses_state.reduce((acc, expense) => {
        if(expense.amount < 0){
            return acc + expense.amount
        }

        return acc
    }, 0);
        
    return (
        <header className=' font-medium w-400px text-center'>
            {expenses_state.length > 0 && (<>
                    <h3 className='  w-full text-2xl'>YOUR BALANCE</h3>
                    <h1 className='w-full mb-5 text-xl'>{`$${balance}.00`}</h1>
                <section className='flex w-[400px] justify-between text-lg'>

                    <aside className='w-40'>
                        <h4>INCOME</h4>
                        <h4 data-testid="income" >{`$${income}`}</h4>
                    </aside>
                    <aside className='w-40'>  
                        <h4>EXPENSE</h4>
                        <h4 data-testid="expense" >{`$${Math.abs(expense)}`}</h4>  
                    </aside>
                </section>
                </>)}
            

        </header>
    )
}
