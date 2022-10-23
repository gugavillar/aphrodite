import { format } from 'date-fns'

import { ExpenseDatabase } from '../@types/expenses'
import { EMPTY } from '../constants/globals'
import { currency } from './currency'

export const formatExpense = (expense: ExpenseDatabase) => {
  const formattedEntryTime = expense?.data?.entryTime
    ? format(expense?.data?.entryTime, 'HH:mm')
    : '-'

  const parcialSpendValue = expense?.data?.isOpen
    ? expense?.data?.products?.reduce(
        (total, product) => (total += product?.value * product?.quantity),
        0
      )
    : 0

  const spendValue = parcialSpendValue
    ? parcialSpendValue + expense?.data?.initialValue
    : expense?.data?.initialValue

  return {
    expenseId: expense?.ref?.value?.id,
    entryTime: expense?.data?.entryTime,
    isOpen: expense?.data?.isOpen,
    formattedEntryTime,
    spendValue: spendValue ? currency(spendValue) : EMPTY
  }
}
