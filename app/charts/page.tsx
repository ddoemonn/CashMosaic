'use client'
import React, { useEffect, useState } from 'react'
import LineChart from '../components/LineChart/LineChart'
import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';
import BarChart from '../components/LineChart/BarChart'
import PieChart from '../components/LineChart/PieChart'
import { expense } from '../types/Expense';
import { useSession } from "next-auth/react";



export default  function page() {
    const { data: session } = useSession();
    const [select, setSelect] = useState<string>('line')
    const expenses_state = useSelector((state: RootState) => state.expenses.expenses)
    const [temp, setTemp] = useState<expense[]>([])
    useEffect(() => {
        setTemp(expenses_state)
    },[expenses_state])
    console.log('expenses_state', expenses_state)
    console.log('temp',temp)
    
    const income = expenses_state.filter(item => item.amount > 0)
    const expense = expenses_state.filter(item => item.amount < 0)
    const income_ = income.reduce((acc, expense) => {return acc + expense.amount }, 0);
    const expense_ = expense.reduce((acc, expense) => {return acc + expense.amount }, 0);
    const pie : expense[] = [
        {
            id: '1',
            amount: income_,
            name: 'Incomes'
        },
        {
            id: '2',
            amount: expense_,
            name: 'Expenses'
        },
    ]

    return (
        <>
            {session ? (
                <section className='flex flex-col justify-center items-center'>
                <label htmlFor="charts" className="block mb-2 mt-3 text-xl font-medium text-gray-900 dark:text-white w-[620px]">Select a chart type</label>
                <select 
                    id="charts" 
                    className="w-[620px] mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                >
                <option value="line">Line Chart</option>
                <option value="bar">Bar Chart</option>
                <option value="pie">Pie Chart</option>
                </select>
                {select === 'line' &&  <LineChart  props={select} expenses_state={temp}/> }
                {select === 'bar' &&  <BarChart  props={select} expenses_state={temp}/>}
                {select === 'pie' &&  <PieChart  props={select} expenses_state={pie}/>}
                {select !== 'pie' && (
                    <aside className='flex  justify-center w-full mt-3 text-center'>
                        <button className='mx-8 bg-slate-300 focus:outline-none p-1 border-2 px-3 rounded-xl focus:border-slate-400' onClick={() => setTemp(expenses_state)}>Total</button>
                        <button className='mx-8 bg-slate-300 focus:outline-none p-1 border-2 px-3 rounded-xl focus:border-slate-400' onClick={() => setTemp(expense)}>Expenses</button>
                        <button className='mx-8 bg-slate-300 focus:outline-none p-1 border-2 px-3 rounded-xl focus:border-slate-400' onClick={() => setTemp(income)}>Incomes</button>
                    </aside>
                
                )}
    
                
    
                
            </section>
            ):(
                <h2 className='text-2xl font-medium mt-10'>You do not have permission to access this page until you are signed in</h2>
            )}
        </>
        
    )
}
