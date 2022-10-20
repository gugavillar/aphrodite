import { ReactNode } from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'

interface CardProps extends FlexProps {
  children: ReactNode
}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <Flex
      width={80}
      height={64}
      borderRadius="base"
      bg="whiteAlpha.800"
      boxShadow="base"
      p={3}
      {...props}
    >
      {children}
    </Flex>
  )
}
