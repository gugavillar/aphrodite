export interface Expense {
  expenseId: string
  entryTime: number
  isOpen: boolean
  formattedEntryTime: string
  spendValue: string
}

export interface ExpenseDatabase {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    isOpen: boolean
    entryTime: number
    roomRef: string
    initialValue: number
    products?: Array<{
      name: string
      value: number
      quantity: number
    }>
    exitTime?: number
  }
}

export interface ProductExpense {
  name: string
  quantity: number
}
