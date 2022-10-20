import { ReactNode } from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'

interface CardProps extends FlexProps {
  children: ReactNode
}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <Flex
      width={80}
      borderRadius="2xl"
      bg="whiteAlpha.800"
      boxShadow="base"
      p={3}
      direction="column"
      {...props}
    >
      {children}
    </Flex>
  )
}
