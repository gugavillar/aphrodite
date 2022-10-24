import { Dispatch, SetStateAction, useCallback, useContext } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Expense } from '../../../@types/expenses'
import { ExpenseContext } from '../../../context/Expense'
import { expenseResolver } from '../../../schemas/expense'
import { OrderContentModal } from './OrderContentModal'

export interface ModalForm {
  name: string
  quantity: number
}

interface OrderModalProps {
  isOpen: boolean
  title: string
  onClose: () => void
  onSetExpense: Dispatch<SetStateAction<Expense | undefined>>
  expense: Expense | undefined
}

export const OrderModal = ({
  isOpen,
  title,
  expense,
  onClose,
  onSetExpense
}: OrderModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, isSubmitting }
  } = useForm<ModalForm>({
    mode: 'onChange',
    resolver: expenseResolver
  })

  const { onAddProductToRoom } = useContext(ExpenseContext)

  const onSubmit = useCallback(
    async (values: ModalForm) => {
      if (!expense?.expenseId) return

      const response = await onAddProductToRoom(values, expense?.expenseId)
      onSetExpense(response)
      reset()
      onClose()
    },
    [expense?.expenseId, onAddProductToRoom, onClose, onSetExpense, reset]
  )

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ModalHeader
          width="28rem"
          textAlign="center"
          mx="auto"
        >
          {title}
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <OrderContentModal
            register={register}
            error={errors}
          />
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Button
            colorScheme="red"
            onClick={onClose}
            width={40}
          >
            Fechar
          </Button>
          <Button
            width={40}
            colorScheme="green"
            isDisabled={!isValid || !isDirty}
            isLoading={isSubmitting}
            type="submit"
          >
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
