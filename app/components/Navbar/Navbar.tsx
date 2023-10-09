'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { signIn, signOut, useSession } from "next-auth/react";
import Icon from './2.svg';
export default function Navbar() {
    return (
        
        <nav className='flex px-7 py-4 bg-slate-200 align-middle font-medium text-lg '>
            <AuthButton />
        </nav>
    )
}

function AuthButton() {
    const { data: session } = useSession();
    const str = `${session?.user?.image}`
    //console.log('navbar',str)

    
    return (
        <>
            <Image src={Icon} alt='icon' width={30} height={25} className='mr-1' />
            <Link href="/" className='flex-1 hover:underline font-medium text-2xl pt-[0.2rem]'>Cash<h1 className='font-bold inline'>Mosaic</h1></Link>
            {session ? (<>
                            <Link href="/charts" className='mr-5 hover:underline pt-1'>Charts</Link>
                            <Link href="/history" className='mr-5 hover:underline pt-1'>History</Link>
                            <Link href="/balance" className='mr-5 hover:underline pt-1'>Balance</Link>
                            <Link href="/profile" className='mr-3 hover:underline pt-1'>Profile</Link>
                    </>
            ) : (
                <button onClick={() => signIn()}
                    className="  rounded-xl shadow-sm border-2 border-slate-200 p-1 px-3  hover:border-slate-300">Sign In</button>
        
            )}

            
        </>
    );

}
