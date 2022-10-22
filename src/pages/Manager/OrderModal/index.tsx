import { useCallback } from 'react'

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

import { expenseResolver } from '../../../schemas/expense'
import { OrderContentModal } from './OrderContentModal'

export interface ModalForm {
  name: string
  quantity: number
}

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  onAddProductToRoom: (product: ModalForm) => Promise<void>
}

export const OrderModal = ({
  isOpen,
  onClose,
  title,
  onAddProductToRoom
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

  const onSubmit = useCallback(
    async (values: ModalForm) => {
      await onAddProductToRoom(values)
      reset()
      onClose()
    },
    [onAddProductToRoom, onClose, reset]
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

        <ModalFooter
          gap={6}
          justifyContent="space-between"
        >
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
