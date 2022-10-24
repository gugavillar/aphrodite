import { createContext, ReactNode, useCallback, useState } from 'react'

import { isWeekend } from 'date-fns'

import { Expense } from '../@types/expenses'
import { RoomDatabase } from '../@types/rooms'
import { formatExpense } from '../formatters/expense'
import { useToastCustom } from '../hooks/useToastCustom'
import { ModalForm } from '../pages/Manager/OrderModal'
import {
  addProductToExpenseRoom,
  closeExpenseRoom,
  createExpense,
  getRoomExpense
} from '../services/expenses'

type FunctionReturn = Promise<Expense | undefined>

interface ExpenseContextInterface {
  onCloseExpenseRoom: (expenseId: string) => FunctionReturn
  onOpenExpenseRoom: (room: RoomDatabase) => FunctionReturn
  onAddProductToRoom: (product: ModalForm, expenseId: string) => FunctionReturn
  getExpense: (room: RoomDatabase) => FunctionReturn
  isLoadingExpenses: boolean
}

export const ExpenseContext = createContext({} as ExpenseContextInterface)

interface ExpenseContextProviderProps {
  children: ReactNode
}

export const ExpenseContextProvider = ({
  children
}: ExpenseContextProviderProps) => {
  const [isLoadingExpenses, setIsLoadingExpenses] = useState(false)

  const toast = useToastCustom()

  const getExpense = useCallback(
    async (room: RoomDatabase) => {
      setIsLoadingExpenses(true)

      try {
        const response = await getRoomExpense(room?.ref?.value?.id)
        const formattedExpense = formatExpense(response)
        return formattedExpense
      } catch (error) {
        toast({
          title: 'Falha na requisição',
          description: 'Falha ao pegar as despesas do apartamento',
          status: 'error'
        })
      } finally {
        setIsLoadingExpenses(false)
      }
    },
    [toast]
  )

  const onCloseExpenseRoom = useCallback(
    async (expenseId: string) => {
      if (!expenseId) return

      try {
        const response = await closeExpenseRoom(expenseId)
        const formattedExpense = formatExpense(response)
        toast({
          status: 'success',
          description: 'As despesas para o apartamento foram encerradas',
          title: 'Apartamento fechado'
        })
        return formattedExpense
      } catch (error) {
        toast({
          status: 'error',
          description: 'Erro ao encerrar a despesa do quarto',
          title: 'Falha ao fechar o quarto'
        })
      }
    },
    [toast]
  )

  const onOpenExpenseRoom = useCallback(
    async (room: RoomDatabase) => {
      const isWeekendDay = isWeekend(new Date())
      const valueRoom = isWeekendDay
        ? room?.data?.weekend?.value
        : room?.data?.week?.value

      try {
        const response = await createExpense(room?.ref?.value?.id, valueRoom)
        const formattedExpense = formatExpense(response)
        toast({
          status: 'success',
          title: 'Apartamento aberto',
          description: 'As despesas para o apartamento já podem ser inseridas'
        })
        return formattedExpense
      } catch (error) {
        toast({
          status: 'error',
          description: 'Erro ao criar a despesa do quarto',
          title: 'Falha ao abrir o quarto'
        })
      }
    },
    [toast]
  )

  const onAddProductToRoom = useCallback(
    async (product: ModalForm, expenseId: string) => {
      if (!expenseId) return

      try {
        const response = await addProductToExpenseRoom(expenseId, product)
        const formattedExpense = formatExpense(response)
        toast({
          status: 'success',
          description: `O produto ${product?.name} foi adicionado`,
          title: 'Produto adicionado'
        })
        return formattedExpense
      } catch (error) {
        toast({
          status: 'error',
          description: 'O produto não foi adicionado',
          title: 'Falha ao adicionar'
        })
      }
    },
    [toast]
  )
  return (
    <ExpenseContext.Provider
      value={{
        onAddProductToRoom,
        onOpenExpenseRoom,
        onCloseExpenseRoom,
        getExpense,
        isLoadingExpenses
      }}
    >
      {children}
    </ExpenseContext.Provider>
  )
}
