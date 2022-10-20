import { ReactNode } from 'react'

import { Flex, FlexProps, Text } from '@chakra-ui/react'

interface ExhibitionItemProps extends FlexProps {
  label: string
  children: ReactNode
}

export const ExhibitionItem = ({
  label,
  children,
  ...props
}: ExhibitionItemProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      width="inherit"
      height={16}
      {...props}
    >
      <Text fontSize="xs">{label}</Text>
      {children}
    </Flex>
  )
}
