import React from 'react'
import Item from './components/History/Item'
import { TExpenses } from './types/Expense'



export default function HistoryLayout({expenses} : TExpenses) {
    return (
        <>
            {(expenses.length > 0) && (
                <ul className='h-[400px] overflow-y-scroll'>
                    {expenses.map((item) => (
                        <div className='m-0 p-0 text-xl font-medium text-slate-900 ' key={item.id}>
                        {item.amount < 0 ? (
                            <li key={item.id} className='flex justify-between rounded-xl m-3 p-2 bg-red-300'>
                                <Item item={item}  />
                            </li>
                        ) : (
                            <li key={item.id} className='flex justify-between rounded-xl m-3 p-2 bg-green-300'>
                                <Item item={item} />
                            </li>
                        )
                        }
                        </div>
                    ))}
                </ul>
            )}
        </>
    )
}
