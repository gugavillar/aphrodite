import { Flex, Button } from '@chakra-ui/react'

interface FooterProps {
  isOpeningExpense: boolean
  isClosingExpense: boolean
  onCloseExpenseRoom: () => Promise<void>
  onOpenExpenseRoom: () => Promise<void>
  isOpenRoom: boolean
}

export const Footer = ({
  isOpenRoom,
  isOpeningExpense,
  isClosingExpense,
  onCloseExpenseRoom,
  onOpenExpenseRoom
}: FooterProps) => {
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
    </Flex>
  )
}
