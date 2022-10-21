import { Fragment, useCallback, useEffect, useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import { format } from 'date-fns'

import { ExhibitionContainer } from '../../components/Card/ExhibitionContainer'
import { ExhibitionItem } from '../../components/Card/ExhibitionItem'
import { Timer } from '../../components/Timer'
import { currency } from '../../formatters/currency'
import { useToastCustom } from '../../hooks/useToastCustom'
import {
  closeExpenseRoom,
  createExpense,
  GetExpense,
  getRoomExpense
} from '../../services/expenses'
import { Footer } from './Footer'

interface MiddleProps {
  status: 'Ativo' | 'Inativo'
  roomId: string
}

const STATUS_COLOR = {
  Ativo: 'green.500',
  Inativo: 'gray.500'
}

const EMPTY = '-'

interface Expense {
  expenseId: string
  entryTime: number
  isOpen: boolean
  formattedEntryTime: string
  spendValue: string
}

const formatExpense = (expense: GetExpense) => {
  const formattedEntryTime = expense?.data?.entryTime
    ? format(expense?.data?.entryTime, 'HH:mm')
    : '-'
  const parcialSpendValue = expense?.data?.products?.reduce(
    (total, product) => (total += product?.value * product?.quantity),
    0
  )
  return {
    expenseId: expense?.ref?.value?.id,
    entryTime: expense?.data?.entryTime,
    isOpen: expense?.data?.isOpen,
    formattedEntryTime,
    spendValue: parcialSpendValue ? currency(parcialSpendValue) : EMPTY
  }
}

export const Middle = ({ status, roomId }: MiddleProps) => {
  const [expense, setExpense] = useState<Expense>()
  const [isClosingExpense, setIsClosingExpense] = useState(false)
  const [isOpeningExpense, setIsOpeningExpense] = useState(false)

  const toast = useToastCustom()

  const getExpense = useCallback(async () => {
    try {
      const response = await getRoomExpense(roomId)
      const formattedExpense = formatExpense(response)
      setExpense(formattedExpense)
    } catch (error) {
      toast({
        title: 'Falha na requisição',
        description: 'Falha ao pegar as despesas do apartamento',
        status: 'error'
      })
    }
  }, [roomId, toast])

  const onCloseExpenseRoom = useCallback(
    async (ref: string | undefined) => {
      if (!ref) return

      setIsClosingExpense(true)

      try {
        const response = await closeExpenseRoom(ref)
        const formattedExpense = formatExpense(response)
        setExpense(formattedExpense)
        toast({
          status: 'success',
          description: 'As despesas para o apartamento foram encerradas',
          title: 'Apartamento fechado'
        })
      } catch (error) {
        toast({
          status: 'error',
          description: 'Erro ao encerrar a despesa do quarto',
          title: 'Falha ao fechar o quarto'
        })
      } finally {
        setIsClosingExpense(false)
      }
    },
    [toast]
  )

  const onOpenExpenseRoom = useCallback(async () => {
    setIsOpeningExpense(true)

    try {
      const response = await createExpense(roomId)
      const formattedExpense = formatExpense(response)
      setExpense(formattedExpense)
      toast({
        status: 'success',
        title: 'Apartamento aberto',
        description: 'As despesas para o apartamento já podem ser inseridas'
      })
    } catch (error) {
      toast({
        status: 'error',
        description: 'Erro ao criar a despesa do quarto',
        title: 'Falha ao abrir o quarto'
      })
    } finally {
      setIsOpeningExpense(false)
    }
  }, [roomId, toast])

  useEffect(() => {
    getExpense()
  }, [getExpense])

  const isOpenRoom = !!expense?.entryTime && expense?.isOpen

  return (
    <Fragment>
      <ExhibitionContainer mt={2}>
        <ExhibitionItem label="Hora de entrada">
          <Text fontSize="2xl">
            {isOpenRoom ? expense?.formattedEntryTime : EMPTY}
          </Text>
        </ExhibitionItem>
        <ExhibitionItem label="Status do quarto">
          <Flex
            bg={STATUS_COLOR[status]}
            borderRadius="full"
            width={5}
            height={5}
            align="center"
            justify="center"
            mt={2}
          />
        </ExhibitionItem>
      </ExhibitionContainer>
      <ExhibitionContainer>
        <ExhibitionItem
          label="Tempo de estadia"
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          {isOpenRoom ? (
            <Timer entryTime={expense?.entryTime} />
          ) : (
            <Text fontSize="2xl">{EMPTY}</Text>
          )}
        </ExhibitionItem>
        <ExhibitionItem
          label="Consumo parcial"
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          <Text fontSize="2xl">{expense?.spendValue}</Text>
        </ExhibitionItem>
      </ExhibitionContainer>
      <Footer
        isOpenRoom={isOpenRoom}
        isOpeningExpense={isOpeningExpense}
        isClosingExpense={isClosingExpense}
        onOpenExpenseRoom={onOpenExpenseRoom}
        onCloseExpenseRoom={() => onCloseExpenseRoom(expense?.expenseId)}
      />
    </Fragment>
  )
}
