export interface Expense {
  isOpen: boolean
  entryTime: number
  roomRef: string
  value: number
  products: Array<{
    name: string
    value: number
    quantity: number
  }>
  exitTime?: number | undefined
  expenseId: string
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
    value: number
    products: Array<{
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
