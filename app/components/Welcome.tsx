'use client'
import React from 'react'
import { signIn } from "next-auth/react";
export default function Welcome() {
    return (
    <section className='border-2 border-slate-200 mt-52 mx-32 text-xl text-center p-4 rounded-xl'>
        <h1>Welcome to PocketPal! Your personal expense tracker. </h1>
        <h2>I see you aren't signed in</h2>
        Please 
        <button onClick={() => signIn()}
                    className=" bg-blue-500 text-white rounded-xl shadow-sm border-2 border-blue-500 shadow-blue-500 mb-2 hover:border-blue-600">Sign In</button>
        
    </section>
    )
}
