'use client'
import React from 'react'
import Image from 'next/image';
import { Session } from 'next-auth'
import { signOut, useSession } from "next-auth/react";
export default function Profile() {
    const { data: session } = useSession();
    const str = `${session?.user?.image}`
    console.log('profile',str)

    return (
        <section className='flex justify-center'>
            {session ? (
                            <section className='border-2 flex flex-col border-slate-300 w-80 mt-20 p-3 rounded-xl shadow-lg shadow-slate-300'>
                                <aside className='mb-7'>
                                <Image src={str} alt='img' width={50} height={45} className='mr-3 rounded-full w-auto h-auto inline' />
                                <p className="mr-4 inline mb-4 text-lg font-medium"> {session?.user?.name} </p> 
                                
                                </aside>
                                <button onClick={() => signOut()}
                                        className=" bg-sky-700 text-white rounded-xl shadow-sm border-2 ">Sign Out</button>
                            </section>
            ):(
                <h2>Fuck off</h2>
            )}
        </section>
        
    )
}
