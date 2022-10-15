import { Flex } from '@chakra-ui/react'

import { ContentContainer } from '../Container/ContentContainer'
import { RouterContainer } from '../Container/RouterContainer'
import { NavList } from './NavList'

export const Sidebar = () => {
  return (
    <RouterContainer>
      <Flex
        width={56}
        direction="column"
        bg="gray.600"
        height="calc(100vh - 48px)"
      >
        <NavList />
      </Flex>
      <ContentContainer />
    </RouterContainer>
  )
}
