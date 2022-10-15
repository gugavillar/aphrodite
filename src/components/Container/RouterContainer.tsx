import { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

interface RouterContainerProps {
  children: ReactNode
}

export const RouterContainer = ({ children }: RouterContainerProps) => {
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
