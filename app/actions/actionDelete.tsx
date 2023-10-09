"use server"
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';
import prisma from '../../prisma/_base'
import { MutableRefObject, RefObject } from 'react';
//const prisma = new PrismaClient()

export default async function deleteTodo(id: string){
        "use server"
        const deleteTodo = await prisma.expense.delete({
            where: {
                id: id,
            },
        })



    revalidatePath('/')
}