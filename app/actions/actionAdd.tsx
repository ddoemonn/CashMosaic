"use server"
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import prisma from '../../prisma/_base'

//const prisma = new PrismaClient()

export default async function addTodo(formData: FormData, id: string) {
    "use server"
    const name = formData.get("name") as string | undefined;
    const amount = formData.get("amount")?.toString();
    
        

    const session = await getServerSession(authOptions);

    const prismaUser = await prisma.user.findUnique({
        where: {email: session?.user?.email || undefined}})


    if (name && amount && id) {
        console.log("im in actionAdd.tsx", id,name,amount);
        const parsedAmount = parseFloat(amount);
        console.log("name: ",name," amount: ",amount);
    
        await prisma.expense.create({
            data: {
                id,
                name,
                amount: parsedAmount,
                userId: prismaUser?.id as string
            },
        });

    //revalidatePath('/');

    }

    
}