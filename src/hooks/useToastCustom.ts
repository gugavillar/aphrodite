import { useCallback } from 'react'

import { useToast } from '@chakra-ui/react'

interface ToastProps {
  title: string
  description: string
  status: 'success' | 'error' | 'info'
}

export const useToastCustom = () => {
  const toastChakra = useToast()

  const toast = useCallback(
    ({ title, description, status }: ToastProps) => {
      toastChakra({
        variant: 'left-accent',
        isClosable: true,
        position: 'top-right',
        title,
        description,
        status
      })
    },
    [toastChakra]
  )

  return toast
}
