
import React from 'react'
import { getServerSession } from 'next-auth'
import Header from '../components/Header/Header';
import HistoryIncome from '../components/Header/HistoryIncome';
import HistoryExpense from '../components/Header/HistoryExpense';


export default async function page() {
    const session = await getServerSession();

    return (
        <>
            {session ? (
                    <section className='flex flex-col items-center mt-5'>
                            <Header />
                            <section className='flex'>
                                <HistoryIncome />
                                <HistoryExpense />
                            </section>
                    </section>
            ):(
                <h2 className='text-2xl font-medium mt-10'>You do not have permission to access this page until you are signed in</h2>
            )}
        </>
        
    )
}
