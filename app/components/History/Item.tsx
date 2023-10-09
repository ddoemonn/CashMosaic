'use client'
import { RootState } from '@/app/GlobalRedux/store';
import { expense } from '@/app/types/Expense'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../../GlobalRedux/Features/expenses/expensesSlice';
import  { VscTrash } from "react-icons/vsc"; 
import actionDelete from '@/app/actions/actionDelete'



export default function Item(item : {item : expense}) {
    const dispatch = useDispatch();
    const loading_state = useSelector((state: RootState) => state.loading);
    return (
        <>
        <label data-testid="label"  className='p-2'>{item.item.name}</label>
        {item.item.amount < 0 ? (
            <p className='flex-1 text-right mr-5 p-2'>{`-$${Math.abs(item.item.amount)}`}</p>
        ) : (
            <p className='flex-1 text-right mr-5 p-2 '>{`$${item.item.amount}`}</p>
        )
        }
            
            <button 
                onClick={async () => {
                console.log(item.item.id)
                //dispatch(setLoadingTrue())
                if(loading_state !== true){
                    dispatch(deleteExpense(item.item.id))
                
                    await actionDelete(item.item.id)    
                }
                //dispatch(setLoadingFalse());
            }}
                    disabled={loading_state}
                    data-testid={`delete-button-${item.item.id}`} 
                    className=' p-2 py-1  ' >
                        <VscTrash className='text-2xl font-bold hover:fill-teal-800' />
                    </button>
        </>
    )
}
