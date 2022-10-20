import { Fragment, useCallback, useEffect, useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import { format } from 'date-fns'

import { currency } from '../../formatters/currency'
import { useToastCustom } from '../../hooks/useToastCustom'
import { GetExpense, getRoomExpense } from '../../services/expenses'
import { Timer } from '../Timer'
import { ExhibitionContainer } from './ExhibitionContainer'
import { ExhibitionItem } from './ExhibitionItem'

interface MiddleProps {
  status: 'Ativo' | 'Inativo'
  roomId: string
}

const STATUS_COLOR = {
  Ativo: 'green.500',
  Inativo: 'gray.500'
}

interface Expense {
  entryTime: number
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
    entryTime: expense?.data?.entryTime,
    formattedEntryTime,
    spendValue: parcialSpendValue ? currency(parcialSpendValue) : currency(0)
  }
}

export const Middle = ({ status, roomId }: MiddleProps) => {
  const [expense, setExpense] = useState<Expense>()

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

  useEffect(() => {
    getExpense()
  }, [getExpense])

  return (
    <Fragment>
      <ExhibitionContainer mt={2}>
        <ExhibitionItem label="Hora de entrada">
          <Text fontSize="2xl">{expense?.formattedEntryTime}</Text>
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
          <Timer entryTime={expense?.entryTime} />
        </ExhibitionItem>
        <ExhibitionItem
          label="Consumo parcial"
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          <Text fontSize="2xl">{expense?.spendValue}</Text>
        </ExhibitionItem>
      </ExhibitionContainer>
    </Fragment>
  )
}
