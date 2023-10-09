'use client'

import { v4 as uuidv4 } from 'uuid';
import { addExpense } from '@/app/GlobalRedux/Features/expenses/expensesSlice';
import { setLoadingFalse, setLoadingTrue } from '@/app/GlobalRedux/Features/expenses/loadingSlice';
import { RootState } from '@/app/GlobalRedux/store';
import actionAdd from '@/app/actions/actionAdd'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
    const ref = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();
    const loading_state = useSelector((state: RootState) => state.loading);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setLoadingTrue())
        const id : string = uuidv4()
        
        
        const formData = new FormData(e.target as HTMLFormElement)
        ref.current?.reset();
        const name = formData.get("name") as string;
        const amount = formData.get("amount")?.toString();
        if(id){
            console.log("fuckoff")
        }
        console.log("name:", name);
        console.log("amount:", amount); 
        console.log("id:", id);
        if(name && amount && id){
            console.log("im in form.tsx", id);
            const parsedAmount = parseFloat(amount);
            dispatch(addExpense({
                id ,
                name,
                amount: parsedAmount ,
            }))

            console.log("name: ",name," amount: ",amount);
        }

        await actionAdd(formData, id);
        dispatch(setLoadingFalse());

        
    };
    
    
    
    return (
        <form   ref={ref} onSubmit={handleSubmit}
        className='m-2 flex  bg-slate-200 p-3 px-8 rounded-2xl font-medium flex-col sm:flex-row w-full sm:w-[660px]'>
            <input type="text" name='name' placeholder='New Expense'    className=' mr-4 mb-2 rounded-2xl p-1 pl-3' />
            <input type="number" name='amount' placeholder='Add Amount' className=' mr-4 mb-2 rounded-2xl p-1 pl-3' />
            {loading_state ? (
                <button type='submit' >Loading</button>    
            ):(
                <button type='submit' className='hover:text-teal-800' >Submit</button>
            )}
            
        </form>
    )
}
