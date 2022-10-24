import { Dispatch, SetStateAction, useCallback, useContext } from 'react'

import { Flex, Button, useDisclosure } from '@chakra-ui/react'

import { Expense } from '../../@types/expenses'
import { RoomDatabase } from '../../@types/rooms'
import { ExpenseContext } from '../../context/Expense'
import { CloseModal } from './CloseModal'
import { OrderModal } from './OrderModal'

interface FooterProps {
  isOpenRoom: boolean
  room: RoomDatabase
  expense: Expense | undefined
  onSetExpense: Dispatch<SetStateAction<Expense | undefined>>
}

export const Footer = ({
  isOpenRoom,
  room,
  expense,
  onSetExpense
}: FooterProps) => {
  const {
    isOpen: isOrderModalOpen,
    onClose: onOrderModalClose,
    onOpen: onOrderModalOpen
  } = useDisclosure()

  const {
    isOpen: isCloseModalOpen,
    onClose: onCloseModalClose,
    onOpen: onCloseModalOpen
  } = useDisclosure()

  const { onOpenExpenseRoom } = useContext(ExpenseContext)

  const handleOpenExpenseRoom = useCallback(async () => {
    const response = await onOpenExpenseRoom(room)
    onSetExpense(response)
  }, [onOpenExpenseRoom, onSetExpense, room])

  return (
    <Flex
      align="center"
      justify="space-between"
      px={3}
      mt={2}
    >
      <Button
        width={28}
        variant="ghost"
        fontSize="2xl"
        fontWeight="normal"
        isDisabled={!isOpenRoom}
        onClick={onOrderModalOpen}
      >
        Pedido
      </Button>
      {isOpenRoom ? (
        <Button
          width={28}
          variant="ghost"
          fontSize="2xl"
          fontWeight="normal"
          onClick={onCloseModalOpen}
        >
          Fechar
        </Button>
      ) : (
        <Button
          width={28}
          variant="ghost"
          fontSize="2xl"
          fontWeight="normal"
          onClick={handleOpenExpenseRoom}
        >
          Abrir
        </Button>
      )}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={onOrderModalClose}
        title="Adicione produtos para o apartamento"
        onSetExpense={onSetExpense}
        expense={expense}
      />
      <CloseModal
        isOpen={isCloseModalOpen}
        onClose={onCloseModalClose}
        title="Quarto"
      />
    </Flex>
  )
}
