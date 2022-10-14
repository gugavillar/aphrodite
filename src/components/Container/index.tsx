import { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <BrowserRouter>
      <Flex
        width="full"
        height="full"
      >
        {children}
      </Flex>
    </BrowserRouter>
  )
}
