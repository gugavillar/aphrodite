import { ExpenseDatabase, ProductExpense } from '../@types/expenses'
import { faunaAPI, faunaQ } from '../api/fauna'

export const createExpense = (roomId: string, valueRoom: number) =>
  faunaAPI.query<ExpenseDatabase>(
    faunaQ.Create(faunaQ.Collection('room_expenses'), {
      data: {
        isOpen: true,
        entryTime: new Date().getTime(),
        roomRef: faunaQ.Ref(faunaQ.Collection('rooms'), roomId),
        value: valueRoom,
        products: []
      }
    })
  )

export const getRoomExpense = (ref: string) =>
  faunaAPI.query<ExpenseDatabase>(
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
  faunaAPI.query<ExpenseDatabase>(
    faunaQ.Update(faunaQ.Ref(faunaQ.Collection('room_expenses'), ref), {
      data: {
        isOpen: false,
        exitTime: new Date().getTime()
      }
    })
  )

export const addProductToExpenseRoom = (ref: string, product: ProductExpense) =>
  faunaAPI.query<ExpenseDatabase>(
    faunaQ.Let(
      {
        products: faunaQ.Select(
          ['data', 'products'],
          faunaQ.Get(faunaQ.Ref(faunaQ.Collection('room_expenses'), ref))
        )
      },
      faunaQ.Update(faunaQ.Ref(faunaQ.Collection('room_expenses'), ref), {
        data: {
          products: faunaQ.Append(
            [
              {
                name: product?.name,
                quantity: product?.quantity,
                value: faunaQ.Select(
                  ['data', 'value'],
                  faunaQ.Get(
                    faunaQ.Match(faunaQ.Index('product_by_name'), product?.name)
                  )
                )
              }
            ],
            faunaQ.Var('products')
          )
        }
      })
    )
  )
