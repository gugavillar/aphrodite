import { ExpenseDatabase } from '../@types/expenses'

export const formatExpense = (expense: ExpenseDatabase) => {
  return {
    expenseId: expense?.ref?.value?.id,
    ...expense?.data
  }
}
