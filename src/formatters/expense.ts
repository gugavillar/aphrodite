import { format } from 'date-fns'

import { EMPTY } from '../constants/globals'
import { GetExpense } from '../services/expenses'
import { currency } from './currency'

export const formatExpense = (expense: GetExpense) => {
  const formattedEntryTime = expense?.data?.entryTime
    ? format(expense?.data?.entryTime, 'HH:mm')
    : '-'
  const parcialSpendValue = expense?.data?.isOpen
    ? expense?.data?.products?.reduce(
        (total, product) => (total += product?.value * product?.quantity),
        0
      )
    : 0
  return {
    expenseId: expense?.ref?.value?.id,
    entryTime: expense?.data?.entryTime,
    isOpen: expense?.data?.isOpen,
    formattedEntryTime,
    spendValue: parcialSpendValue ? currency(parcialSpendValue) : EMPTY
  }
}
