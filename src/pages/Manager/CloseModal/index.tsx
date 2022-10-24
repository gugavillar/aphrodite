import { Dispatch, SetStateAction, useState } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider
} from '@chakra-ui/react'

import { Expense } from '../../../@types/expenses'
import { BodyModal } from './BodyModal'
import { FooterModal } from './FooterModal'

interface CloseModalProps {
  isOpen: boolean
  title: string
  onClose: () => void
  onSetExpense: Dispatch<SetStateAction<Expense | undefined>>
  expense: Expense | undefined
}

export const CloseModal = ({
  isOpen,
  title,
  expense,
  onClose
}: CloseModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState('')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="6xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="4xl">{title}</ModalHeader>

        <ModalCloseButton size="lg" />

        <Divider />

        <ModalBody>
          <BodyModal expense={expense} />
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <FooterModal
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            expense={expense}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
