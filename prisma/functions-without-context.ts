import prisma from './client'

interface Expense {
  name: string
  amount: number
}

export async function createExpense(expense: Expense) {
    return await prisma.expense.create({
      data: expense,
    })
  
}

export async function deleteExpense(expenseId: number) {

    const existingExpense = await prisma.expense.findUnique({
      where: { id: expenseId },
    });

    return await prisma.expense.delete({
      where: { id: expenseId },
    });
}


export async function findManyExpenses() {
    const expenses = await prisma.expense.findMany();
    return expenses;
}
