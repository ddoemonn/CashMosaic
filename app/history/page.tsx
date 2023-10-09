'use client'
import React from 'react'
import History from '../components/History/History'
import Form from '../components/Form/Form';
import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';
import { useSession } from "next-auth/react";

export default  function Page() {
    const { data: session } = useSession();
    const expenses_state = useSelector((state: RootState) => state.expenses.expenses);

    return (
        <>
            {session ? (
                        <section className='flex flex-col items-center '>
                            <History  />
                            <Form />
                        </section>
            ):(
                <h2 className='text-2xl font-medium mt-10'>You do not have permission to access this page until you are signed in</h2>
            )}
        </>
        
    )
}
