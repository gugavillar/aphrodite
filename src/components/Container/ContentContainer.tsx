import { Flex } from '@chakra-ui/react'

import { AppRoutes } from '../../routes'

export const ContentContainer = () => {
  return (
    <Flex
      flex={1}
      p={4}
      bg="blackAlpha.100"
    >
      <AppRoutes />
    </Flex>
  )
}
