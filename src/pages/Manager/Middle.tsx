import { Fragment, useCallback, useContext, useEffect, useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { Expense } from '../../@types/expenses'
import { RoomDatabase } from '../../@types/rooms'
import { ExhibitionContainer } from '../../components/Card/ExhibitionContainer'
import { ExhibitionItem } from '../../components/Card/ExhibitionItem'
import { LoadingContainer } from '../../components/Container/LoadingContainer'
import { Timer } from '../../components/Timer'
import { EMPTY, STATUS_COLOR } from '../../constants/globals'
import { ExpenseContext } from '../../context/Expense'
import { currency } from '../../formatters/currency'
import { calculateTotal, formatTime } from '../../formatters/globals'
import { Footer } from './Footer'

interface MiddleProps {
  room: RoomDatabase
}

export const Middle = ({ room }: MiddleProps) => {
  const [expense, setExpense] = useState<Expense | undefined>()

  const { getExpense, isLoadingExpenses } = useContext(ExpenseContext)

  const loadExpense = useCallback(async () => {
    const response = await getExpense(room)
    setExpense(response)
  }, [getExpense, room])

  useEffect(() => {
    loadExpense()
  }, [loadExpense])

  const isOpenRoom = !!expense?.entryTime && expense?.isOpen

  const formattedEntryTime = isOpenRoom ? formatTime(expense?.entryTime) : EMPTY

  const spendValue = isOpenRoom
    ? calculateTotal(expense?.products, expense?.value)
    : 0

  const formattedSpendValue = currency(spendValue)

  return (
    <LoadingContainer isLoadingData={isLoadingExpenses}>
      <Fragment>
        <ExhibitionContainer mt={2}>
          <ExhibitionItem label="Hora de entrada">
            <Text fontSize="2xl">{formattedEntryTime}</Text>
          </ExhibitionItem>
          <ExhibitionItem label="Status do quarto">
            <Flex
              bg={STATUS_COLOR[room?.data?.status]}
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
            <Text fontSize="2xl">{formattedSpendValue}</Text>
          </ExhibitionItem>
        </ExhibitionContainer>
        <Footer
          expense={expense}
          onSetExpense={setExpense}
          isOpenRoom={isOpenRoom}
          room={room}
        />
      </Fragment>
    </LoadingContainer>
  )
}
