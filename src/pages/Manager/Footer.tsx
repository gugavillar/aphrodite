import { Flex, Button, useDisclosure } from '@chakra-ui/react'

import { ModalForm, OrderModal } from './OrderModal'

interface FooterProps {
  isOpeningExpense: boolean
  isClosingExpense: boolean
  onCloseExpenseRoom: () => Promise<void>
  onOpenExpenseRoom: () => Promise<void>
  onAddProductToRoom: (product: ModalForm) => Promise<void>
  isOpenRoom: boolean
}

export const Footer = ({
  isOpenRoom,
  isOpeningExpense,
  isClosingExpense,
  onCloseExpenseRoom,
  onOpenExpenseRoom,
  onAddProductToRoom
}: FooterProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

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
        onClick={onOpen}
      >
        Pedido
      </Button>
      {isOpenRoom ? (
        <Button
          width={28}
          variant="ghost"
          fontSize="2xl"
          fontWeight="normal"
          isLoading={isClosingExpense}
          onClick={onCloseExpenseRoom}
        >
          Fechar
        </Button>
      ) : (
        <Button
          width={28}
          variant="ghost"
          fontSize="2xl"
          fontWeight="normal"
          isLoading={isOpeningExpense}
          onClick={onOpenExpenseRoom}
        >
          Abrir
        </Button>
      )}
      <OrderModal
        onAddProductToRoom={onAddProductToRoom}
        isOpen={isOpen}
        onClose={onClose}
        title="Adicione produtos para o apartamento"
      />
    </Flex>
  )
}
