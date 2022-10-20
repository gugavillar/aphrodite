import { ReactNode } from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'

interface ExhibitionContainerProps extends FlexProps {
  children: ReactNode
}

export const ExhibitionContainer = ({
  children,
  ...props
}: ExhibitionContainerProps) => {
  return (
    <Flex
      width="100%"
      justify="space-between"
      {...props}
    >
      {children}
    </Flex>
  )
}
