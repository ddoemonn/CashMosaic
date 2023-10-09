import { createExpense, deleteExpense, findManyExpenses } from '../functions-without-context'
import { prismaMock } from '../singleton'

test('should create new user ', async () => {
    const expense = {
        id: 1,
        name: 'Flowers',
        amount: 50
    }

    prismaMock.expense.create.mockResolvedValue(expense)

    await expect(createExpense(expense)).resolves.toEqual({
        id: 1,
        name: 'Flowers',
        amount: 50
    })
})

test('should find many expenses', async () => {
    const expenses = [
        { id: 1, name: 'Flowers', amount: 50 },
        { id: 2, name: 'Food', amount: 30 },
    ]

    prismaMock.expense.findMany.mockResolvedValue(expenses)

    const result = await findManyExpenses() 

    expect(result).toEqual(expenses)
})

test('should delete an expense', async () => {
    const expense = {
        id: 1,
        name: 'Flowers',
        amount: 50
    }

    prismaMock.expense.delete.mockResolvedValue(expense)

    const result = await deleteExpense(1) 

    expect(result).toEqual(expense)
})



