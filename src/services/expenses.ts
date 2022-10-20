import { faunaAPI, faunaQ } from '../api/fauna'
import { ProductForm } from '../pages/Products/FormProduct'

export interface CreateExpense {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    isOpen: boolean
    entryTime: number
    roomRef: string
    products?: Array<{
      name: string
      value: number
      amount: number
    }>
  }
}

export const createExpense = (product: ProductForm) =>
  faunaAPI.query<CreateExpense>(
    faunaQ.Create(faunaQ.Collection('products'), {
      data: product
    })
  )

export interface GetExpense {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    isOpen: boolean
    entryTime: number
    roomRef: string
    products?: Array<{
      name: string
      value: number
      quantity: number
    }>
  }
}

export const getRoomExpense = (ref: string) =>
  faunaAPI.query<GetExpense>(
    faunaQ.If(
      faunaQ.Exists(
        faunaQ.Match(
          faunaQ.Index('expense_by_room_ref'),
          faunaQ.Ref(faunaQ.Collection('rooms'), ref),
          true
        )
      ),
      faunaQ.Get(
        faunaQ.Match(
          faunaQ.Index('expense_by_room_ref'),
          faunaQ.Ref(faunaQ.Collection('rooms'), ref),
          true
        )
      ),
      {}
    )
  )
