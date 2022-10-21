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
}

export const OrderModal = ({
  isOpen,
  onClose,
  children,
  title
}: OrderModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>

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
          >
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
