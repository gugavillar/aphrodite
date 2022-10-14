import { Flex } from '@chakra-ui/react'

import { AppRoutes } from '../../routes'

export const RouteContainer = () => {
  return (
    <Flex
      flex={1}
      p={4}
    >
      <AppRoutes />
    </Flex>
  )
}
