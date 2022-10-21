import { Flex, Button, useDisclosure } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { OrderModal } from '../../components/OrderModal'
import { expenseResolver } from '../../schemas/expense'
import { OrderContentModal } from './OrderContentModal'

interface FooterProps {
  isOpeningExpense: boolean
  isClosingExpense: boolean
  onCloseExpenseRoom: () => Promise<void>
  onOpenExpenseRoom: () => Promise<void>
  isOpenRoom: boolean
  number: number
}

export interface ModalForm {
  product: string
  quantity: number
}

export const Footer = ({
  isOpenRoom,
  isOpeningExpense,
  isClosingExpense,
  onCloseExpenseRoom,
  onOpenExpenseRoom,
  number
}: FooterProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting }
  } = useForm<ModalForm>({
    mode: 'onChange',
    resolver: expenseResolver
  })

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
        isOpen={isOpen}
        onClose={onClose}
        title={`Adicione produtos para o apartamento de número ${number}`}
        isValidForm={!isValid || !isDirty}
        isSubmittingForm={isSubmitting}
      >
        <OrderContentModal
          register={register}
          error={errors}
        />
      </OrderModal>
    </Flex>
  )
}
