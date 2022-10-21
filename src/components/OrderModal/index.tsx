import { ReactNode } from 'react'

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

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
  isValidForm: boolean
  isSubmittingForm: boolean
}

export const OrderModal = ({
  isOpen,
  onClose,
  children,
  title,
  isValidForm,
  isSubmittingForm
}: OrderModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          width="28rem"
          textAlign="center"
          mx="auto"
        >
          {title}
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>

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
            isDisabled={isValidForm}
            isLoading={isSubmittingForm}
          >
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
