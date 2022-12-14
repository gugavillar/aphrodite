import { ReactNode } from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'

interface PageContainerProps extends FlexProps {
  children: ReactNode
}

export const PageContainer = ({ children, ...props }: PageContainerProps) => {
  return (
    <Flex
      width="full"
      height="full"
      borderRadius="base"
      p={3}
      direction="column"
      {...props}
    >
      {children}
    </Flex>
  )
}
