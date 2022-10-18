import { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'

interface PageContainerProps {
  children: ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Flex
      bg="white"
      width="full"
      height="full"
      borderRadius="base"
      p={3}
      direction="column"
    >
      {children}
    </Flex>
  )
}
