import { faunaAPI, faunaQ } from '../api/fauna'

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
    exitTime?: number
  }
}

export const createExpense = (roomId: string) =>
  faunaAPI.query<GetExpense>(
    faunaQ.Create(faunaQ.Collection('room_expenses'), {
      data: {
        isOpen: true,
        entryTime: new Date().getTime(),
        roomRef: faunaQ.Ref(faunaQ.Collection('rooms'), roomId)
      }
    })
  )

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

export const closeExpenseRoom = (ref: string) =>
  faunaAPI.query<GetExpense>(
    faunaQ.Update(faunaQ.Ref(faunaQ.Collection('room_expenses'), ref), {
      data: {
        isOpen: false,
        exitTime: new Date().getTime()
      }
    })
  )
