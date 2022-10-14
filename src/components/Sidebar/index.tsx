import { Flex } from '@chakra-ui/react'

import { Container } from '../Container'
import { NavList } from './NavList'
import { RouteContainer } from './RouteContainer'

export const Sidebar = () => {
  return (
    <Container>
      <Flex
        width={56}
        direction="column"
        bg="gray.600"
        height="calc(100vh - 48px)"
      >
        <NavList />
      </Flex>
      <RouteContainer />
    </Container>
  )
}
